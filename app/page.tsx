import Feed from "@/components/Main_Heropage/Feed";
import { db } from "@/data/db";
import { endOfDay, startOfDay } from "date-fns";
import { headers } from "next/headers";

export default async function Home() {
  const ip = (await headers()).get("x-forwarded-for") || "unknown-ip";

  const alreadySearched = await db.userRateLimit.count({
    where: {
      ip,
      searchedAt: {
        gte: startOfDay(new Date()),
        lte: endOfDay(new Date()),
      },
    },
  });

  return (
    <section className="w-full flex justify-center items-center flex-col pb-[40px]">
      <h1 className="head_text text-center font-[inter, sans-serif]">
        AI Search Engine for
        <br className="orange_gradient" />
        <span className="orange_gradient text-center">
          200+ Ganjiswag Episodes
        </span>
      </h1>
      <p className="desc text-center font-[inter, sans-serif] mt-6">
        Can’t find that one relatable question from an old episode? Just type
        your thoughts below — our AI will search across all Ask Ganjiswag
        episodes and find the most relevant questions, timestamps and link to
        the video.
      </p>

      <Feed alreadySearchChecked={alreadySearched} />
    </section>
  );
}
