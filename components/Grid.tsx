import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";
import { useTranslation } from "react-i18next";
import Presentation from "./ui/Presentation";

const Grid = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full py-20">
      <h1 className="heading mb-10 mt-32">
        {t("about_heading_1")}{" "}
        <span className="dark:text-[#fff482] text-purple">
          {t("about_heading_2")}
        </span>{" "}
        ?
      </h1>
      <div className="lg:my-20 md:my-10 my-5">
        <Presentation />
      </div>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            titleClassName,
            img,
            imgClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
