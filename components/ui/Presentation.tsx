import React from "react";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { t } = useTranslation();
  return (
    <div className="flex lg:flex-row flex-col md:items-center items-center lg:gap-6 md:gap-4 gap-3">
      <div className="lg:w-3/6 md:w-1/3 w-4/6 overflow-hidden object-cover">
        <img src={"/foto-profilo.jpg"} alt="profile" className="rounded-full" />
      </div>

      <p className="text-wrap text-center lg:w-3/5 sm:pt-10">
        {t("presentation")}
      </p>
    </div>
  );
};

export default Presentation;
