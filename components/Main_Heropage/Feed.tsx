"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";

import { Textarea } from "../ui/textarea";
import { GenerateAISearchForQuestions } from "@/actions/aiStuff";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CountdownTimer } from "../CountDownTimer";
import { endOfToday } from "date-fns";

const formSchema = z.object({
  userQuery: z
    .string()
    .min(27, {
      message: "Your Query must be at least 27 characters long.",
    })
    .max(1000, {
      message: "Your Query must not be at more than 1000 characters long.",
    }),
});

const Feed = ({ alreadySearchChecked }: { alreadySearchChecked: any }) => {
  const router = useRouter();
  // Search states
  const [disabled, setDisabled] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userQuery: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      setDisabled(true);
      console.log(values);
      const TheAIResposne = await GenerateAISearchForQuestions(
        values.userQuery
      );

      if (TheAIResposne.success) {
        console.log(TheAIResposne);

        toast.success("Your Search Results are ready!");

        router.push(`/Results/${TheAIResposne.aiSearch?.id}`);
      } else {
        toast.error(TheAIResposne.error || "Something went wrong.");
      }

      setDisabled(false);
    } catch (error) {
      console.log(error);

      setDisabled(false);
    }
  }

  let HasSearched = false;

  if (alreadySearchChecked >= 5) {
    HasSearched = true;
  }

  const totalDate = endOfToday();

  return (
    <>
      {HasSearched ? (
        <>
          <p className="text-destructive mt-4 font-normal text-[18px]">
            You Have Exausted Your Search Limit, Try Again Tomorrow
          </p>
          <CountdownTimer date={totalDate} />
        </>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative w-full flex flex-col gap-5 justify-center items-center"
          >
            <FormField
              control={form.control}
              name="userQuery"
              render={({ field }) => (
                <>
                  <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 p-1 mt-8 rounded-2xl w-fit max-[756px]:w-full max-[756px]:h-full">
                    <Textarea
                      onChange={field.onChange}
                      value={field.value}
                      className="bg-white rounded-xl w-full text-[17px] h-full font-semibold"
                      placeholder="Type anything... like early marriage issues with in-laws, NOTE: For Accurate Results, Be precise with your question, AI Loves Context"
                    />
                  </div>
                  <FormMessage />
                </>
              )}
            />

            <Button
              disabled={disabled}
              type="submit"
              className="w-[150px] text-[13px]
                   bg-black text-white font-semibold cursor-pointer pl-[20px] pr-[20px] pt-[7px] pb-[7px] rounded-full"
            >
              {disabled && (
                <Image
                  src="/assets/icons/loader.svg"
                  alt="loading"
                  width={17}
                  height={17}
                  className="animate-spin mr-2"
                />
              )}

              {disabled ? "Wait For It..." : "Submit"}
            </Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default Feed;
