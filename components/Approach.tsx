import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Card from "./ui/Card";
import { AceternityIcon } from "./ui/Icon";
import { approach } from "@/data";
import { useTranslation } from "next-i18next";

const Approach = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20">
      <h1 className="heading">
        {t("header_approach_1")}{" "}
        <span className="dark:text-[#fff482] text-purple">
          {t("header_approach_2")}
        </span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        {approach?.map(
          (
            {
              id,
              title,
              order,
              des,
              animationSpeed,
              containerClassName,
              colors,
              dotSize,
            },
            idx
          ) => (
            <Card
              key={id + idx}
              title={t(title)}
              icon={<AceternityIcon order={t(order)} />}
              des={t(des)}
            >
              <CanvasRevealEffect
                animationSpeed={animationSpeed}
                containerClassName={`${containerClassName} rounded-3xl overflow-hidden`}
                colors={colors}
                dotSize={dotSize}
              />
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Approach;
