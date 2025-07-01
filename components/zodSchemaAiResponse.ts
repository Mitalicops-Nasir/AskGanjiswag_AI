import { z } from "zod";

export const AIResponseSchema = z.array(
  z.object({
    episode: z.coerce.number(),
    timestamp: z.string(), // "00:03:21"
    question: z.string(),
    videoUrl: z.string(), // with &t=seconds already included
  })
);
