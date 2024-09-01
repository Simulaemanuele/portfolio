"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import WavyBackground from "./ui/WavyBackground";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <section className="pb-20 pt-36" id="hero">
      <div className="h-screen w-full dark:bg-black-100 bg-stone-100 flex items-center justify-center absolute top-0 left-0">
        {theme === "dark" && (
          <WavyBackground backgroundFill={"rgb(0,3,25,1)"} />
        )}
        {theme === "light" && (
          <WavyBackground backgroundFill={"rgb(245,245,244,1)"} />
        )}
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80">
            {t("hero_title_1")}
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={t("hero_title_2")}
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            {t("hero_head_paragraph")}
          </p>

          <a href="#about">
            <MagicButton
              title={t("hero_head_button")}
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
