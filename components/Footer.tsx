"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  console.log("theme: ", theme);

  const mailRedirect = () => {
    const link = "mailto:simulaemanuele@gmail.com";

    window.open(link, "_blank");
  };
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take{" "}
          <span className="dark:text-purple text-violet-950">your</span> digital
          presence to the next level?
        </h1>
        <p className="dark:text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achive
          your goals.
        </p>

        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={mailRedirect}
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 | Emanuele Simula
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, imgBlack, imgWhite }, idx) => (
            <div
              key={id + idx}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 dark:bg-black-200 bg-white-200 rounded-lg border border-black-300 shadow"
            >
              {theme === "dark" && (
                <img src={imgBlack} alt={imgBlack} height={20} width={20} />
              )}
              {theme === "light" && (
                <img src={imgWhite} alt={imgWhite} height={20} width={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
