"use server";

import { AIResponseSchema } from "@/components/zodSchemaAiResponse";
import { db } from "@/data/db";
import { hashQuery } from "@/lib/utils";
import { results } from "@/type";
import { startOfDay, endOfDay, subDays } from "date-fns";

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import { headers } from "next/headers";

export async function GenerateAISearchForQuestions(TheUserQuery: string) {
  try {
    await db.userRateLimit.deleteMany({
      where: {
        searchedAt: {
          lt: subDays(new Date(), 30),
        },
      },
    });

    await db.aISearch.deleteMany({
      where: {
        createdAt: {
          lt: subDays(new Date(), 30),
        },
      },
    });

    // 🔐 STEP 1: Get user IP
    const ip = (await headers()).get("x-forwarded-for") || "unknown-ip";

    // 🧠 STEP 2: Check if this IP has already searched today
    const alreadySearched = await db.userRateLimit.count({
      where: {
        ip,
        searchedAt: {
          gte: startOfDay(new Date()),
          lte: endOfDay(new Date()),
        },
      },
    });

    if (alreadySearched >= 5) {
      return {
        alreadySearched,
        error: "🚫 You have already searched today.",
      };
    }

    const AllTheEpisodesQuestions = await db.episode.findMany({
      select: {
        number: true,
        videoUrl: true,
        questions: {
          select: {
            timestamp: true,
            text: true,
          },
        },
      },
    });

    const prompt = `You are an AI trained to act as a search assistant for a podcast called “Ask Ganjiswag,” hosted by Junaid Akram. Each episode contains real, timestamped questions sent in by listeners, covering life, career, mental health, relationships, and society.
Those Episodes and the individual episodes questions are stored in the database, Your task is to read a user’s query and return a list of the most relevant questions discussed across the episodes from this db

The Users Query: ${TheUserQuery}
The DB Episodes And Questions of those individual episodes:  ${JSON.stringify(
      AllTheEpisodesQuestions
    )}

For each match, return:

- the episode number
- the timestamp as shown in the database (e.g., "01:23")
- out of all of those questions the most probable question that u conclude that matches in the database to the users query, but do not make up something of ur own and put it there, dont. the question should be from the db questions, 
- the videoUrl, which includes &t=seconds to jump to that timestamp

**Instructions:**
- Only return matches that are actually relevant to the user's query.
- Be concise — do not include any commentary or summaries.
- Return the final output as a JSON array of objects using this shape exactly:

{
  episode: number;
  timestamp: string;
  question: string;
  videoUrl: string;
};`;

    const hashedQuery = hashQuery(TheUserQuery);

    const existing = await db.aISearch.findUnique({
      where: { queryHash: hashedQuery },
    });

    if (existing) {
      return {
        existing,
        success: "Your Search Results are ready!",
      }; // Serve cached result using this hashed query of user
    }

    const google = createGoogleGenerativeAI({
      // custom settings
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const model = google("gemini-2.0-flash", {
      // structuredOutputs: ,
    });

    const { object: AISearchResult } = await generateObject<results>({
      model,
      prompt,
      schema: AIResponseSchema,
    });

    const MakeAISearchResultsInDB = await db.aISearch.create({
      data: {
        query: TheUserQuery,
        queryHash: hashedQuery,
        modelUsed: model.provider,
        results: {
          results: AISearchResult.map((item) => ({
            episode: item.episode,
            timestamp: item.timestamp,
            question: item.question,
            videoUrl: item.videoUrl,
          })),
        },
      },
    });

    // ✅ STEP 4: Save the rate limit after successful generation
    await db.userRateLimit.create({
      data: {
        ip,
        searchedAt: new Date(),
      },
    });

    return {
      success: "Your Search Results are ready!",
      aiSearch: MakeAISearchResultsInDB,
    };
  } catch (error) {
    console.error("Error Generating Search Results", error);
    throw new Error("Failed to generate AI Search Results");
  }
}
