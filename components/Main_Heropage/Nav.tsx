"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full pt-[26px] pb-[26px]">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={500}
          height={500}
          className="max-w-[40px] max-h-[40px] rounded-full"
        />
        <p className="text-[24px] font-semibold">Ganjiswag AI</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:hidden hidden">
        {clicked ? (
          <div className="flex gap-3 items-center md:gap-5">
            <Link
              href="/create-prompt"
              className="w-fit text-[14px]
                   bg-black text-white font-normal pl-[10px] pr-[10px] pt-[7px] pb-[7px] rounded-xl"
            >
              All Questions
            </Link>

            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setClicked(false)}
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={"/assets/images/default-pic.jpg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              setClicked(true);
            }}
            className="w-full text-[13px]
                   bg-black text-white font-semibold cursor-pointer pl-[20px] pr-[20px] pt-[7px] pb-[7px] rounded-full"
          >
            Sign in
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden hidden">
        {" "}
        {/* Its hidden for now. for future use  */}
        {clicked ? (
          <div className="flex">
            <Image
              src={"/assets/images/default-pic.jpg"}
              width={37}
              height={37}
              className="rounded-full relative cursor-pointer"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="absolute right-[30px] top-[80px] flex flex-col gap-5 w-fit bg-white p-4 text-center drop-shadow-2xl rounded-lg">
                <Link
                  href="/profile"
                  className="w-full text-[13px]
                   bg-black text-white font-semibold pl-[10px] pr-[10px] pt-[7px] pb-[7px] rounded-full"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="w-full text-[13px]
                   bg-black text-white font-semibold pl-[10px] pr-[10px] pt-[7px] pb-[7px] rounded-full"
                  onClick={() => setToggleDropdown(false)}
                >
                  All Questions
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="w-full text-[13px]
                   bg-black text-white font-semibold pl-[10px] pr-[10px] pt-[7px] pb-[7px] rounded-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => {
              setClicked(true);
            }}
            className="black_btn"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
