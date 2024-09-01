"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";

const RecentProjects = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        {t("recent_projects_1")}{" "}
        <span className="dark:text-[#fff482] text-purple">
          {t("recent_projects_2")}
        </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects?.map(
          ({ id, title, des, img, iconLists, link, type }, idx) => (
            <div
              key={id + idx}
              className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              onClick={() => window.open(link, "_blank")}
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="./bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className={`${
                      img !== "/movie-app-smaller.svg"
                        ? "z-10 bottom-0"
                        : "w-[80%] h-[38vh] rotate-[-8deg] top-11"
                    } absolute`}
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {t(title)}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {t(des)}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists?.map((icon, idx) => (
                      <div
                        key={icon + idx}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(${-5 * idx * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="flex lg:text-xl md:text-xs text-sm dark:text-[#fff482] text-purple">
                      {t(
                        type && type === "webapp"
                          ? "check_live_site"
                          : "download_apk"
                      )}
                    </p>
                    <FaLocationArrow
                      className="ms-3"
                      color={`${theme === "dark" ? "#fff482" : "#cbacf9"}`}
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
