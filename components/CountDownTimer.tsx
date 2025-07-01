import React from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

// Define the countdown renderer
const renderer: CountdownRendererFn = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    // Display a message or action when the countdown is complete
    return <span>Offer has ended!</span>;
  } else {
    // Show remaining time in a custom format
    return (
      <div className="flex justify-center max-[390px]:flex-wrap gap-3 mb-7 mt-4">
        <div className="flex flex-col">
          <p className="text-black font-bold text-[25px] sm:text-[40px]">
            0{days}
          </p>

          <p className="text-gray-500 font-medium text-[16px]">Days</p>
        </div>
        <span className="text-black text-bold text-[40px] max-[390px]:hidden">
          :
        </span>
        <div className="flex flex-col">
          <p className="text-black font-bold text-[25px] sm:text-[40px]">
            {hours}
          </p>

          <p className="text-gray-500 font-medium text-[16px]">Hours</p>
        </div>
        <span className="text-black text-bold text-[40px] max-[390px]:hidden">
          :
        </span>
        <div className="flex flex-col">
          <p className="text-black font-bold text-[25px] sm:text-[40px]">
            {minutes}
          </p>

          <p className="text-gray-500 font-medium text-[16px]">Minutes</p>
        </div>
        <span className="text-black text-bold text-[40px] max-[390px]:hidden">
          :
        </span>
        <div className="flex flex-col">
          <p className="text-black font-bold text-[25px] sm:text-[40px]">
            {seconds}
          </p>

          <p className="text-gray-500 font-medium text-[16px]">Seconds</p>
        </div>
      </div>
    );
  }
};

// Countdown Timer component
export const CountdownTimer = ({
  date,
}: {
  date?: string | number | Date | undefined;
}) => {
  // Set target date (e.g., 5 days from now)
  const targetDate = Date.now() + 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

  return <Countdown date={date} renderer={renderer} />;
};
