import { FetchResults } from "@/actions/FetchResults";
import ResultsUICard from "@/components/Main_Heropage/ResultsUICard";

import React from "react";

const page = async ({ params }: { params: any }) => {
  const { id } = await params;

  const results = await FetchResults(id);

  return (
    <>
      <ResultsUICard data={results!} />
    </>
  );
};

export default page;
