import { resultsInUI } from "@/type";
import React from "react";
import Copy from "../Copy";

const ResultsUICard = ({ data }: { data: resultsInUI }) => {
  console.log("MAIN:", data.results);

  return (
    <section className="w-full">
      {data.results.length === 0 && (
        <h1 className="text-center text-2xl font-semibold text-black mt-10">
          No Questions Found Related To Your Query
        </h1>
      )}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] max-[321px]:grid-cols-1 auto-rows-[minmax(200px,auto)]">
        {data.results.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 rounded-[15px] p-[3px] h-fit drop-shadow-2xl drop-shadow-[#0D0A2C14]"
          >
            <div className="bg-[#FFFFFF] p-[19px] rounded-[15px] h-full text-center">
              <div className="flex justify-between items-center">
                <div className="bg-black pr-[8px] pb-[4px] pt-[4px] pl-[8px]  rounded-[20px]">
                  <span className="text-white">EP: {item.episode}</span>
                </div>

                <div className="bg-black pr-[8px] pb-[4px] pt-[4px] pl-[8px] rounded-[20px]">
                  <span className="text-white">{item.timestamp}</span>
                </div>
              </div>

              <div className="mt-[30px] bg-black pr-[20px] pb-[7px] pt-[7px] pl-[20px] rounded-[20px] w-fit mx-auto">
                <p className="text-white font-normal">{item.question}</p>
              </div>
              <Copy title={item.videoUrl} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultsUICard;
