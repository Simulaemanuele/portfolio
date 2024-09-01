"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  console.log("window: ", window);
  const lang = window.navigator.language;

  const mailRedirect = () => {
    const link = "mailto:simulaemanuele@gmail.com";

    window.open(link, "_blank");
  };
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {t("header_footer_1")}{" "}
          <span className="dark:text-purple text-violet-950">
            {t("header_footer_2")}
          </span>
          {lang === "it-IT" && " "}
          {t("header_footer_3")}
        </h1>
        <p className="dark:text-white-200 md:mt-10 my-5 text-center">
          {t("footer_paragraph")}
        </p>

        <MagicButton
          title={t("redirect_button")}
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
          {socialMedia.map(({ id, imgBlack, imgWhite, link }, idx) => (
            <div
              key={id + idx}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 dark:bg-black-200 bg-white-200 rounded-lg border border-black-300 shadow"
            >
              {theme === "dark" && (
                <div onClick={() => window.open(link, "_blank")}>
                  <img src={imgBlack} alt={imgBlack} height={20} width={20} />
                </div>
              )}
              {theme === "light" && (
                <div onClick={() => window.open(link, "_blank")}>
                  <img src={imgWhite} alt={imgWhite} height={20} width={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
