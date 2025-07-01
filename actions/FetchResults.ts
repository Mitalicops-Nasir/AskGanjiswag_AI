"use server";

import { db } from "@/data/db";
import {  resultsInUI } from "@/type";

export const FetchResults = async (id: string) => {
  try {
    const results = await db.aISearch.findUnique({
      where: {
        id: id,
      },
      select: {
        results: true,
      },
    });

    return results?.results as resultsInUI;
  } catch (error) {
    console.log(error);
  }
};
