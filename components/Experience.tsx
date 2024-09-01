"use client";

import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";

const Experience = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        {t("header_experience_1")}
        <span className="dark:text-purple text-violet-950">
          {" "}
          {t("header_experience_2")}
        </span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(
          ({ id, title, desc, className, thumbnail }, idx) => (
            <Button
              key={id + idx}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800 dark:bg-slate-900/[0.8] bg-stone-200"
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={thumbnail}
                  alt={thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold dark:text-white text-violet-950">
                    {t(title)}
                  </h1>
                  <p className="text-start dark:text-white-100 text-black mt-3 font-semibold">
                    {t(desc)}
                  </p>
                </div>
              </div>
            </Button>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
