"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

function SwitchLanguage({
  setSpinnerLoading,
}: {
  setSpinnerLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const locales = [
    { code: "en", label: "English" },
    { code: "it", label: "Italiano" },
  ];

  const changeLanguage = (lng: string) => {
    setSpinnerLoading(true);
    i18n.changeLanguage(lng);
    sessionStorage.setItem("compareLang", lng);
    setTimeout(() => {
      setSpinnerLoading(false);
    }, 1000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full dark:bg-black-100 bg-stone-100"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            asChild
            className={currentLocale === locale.code ? "font-bold" : ""}
          >
            <a onClick={() => changeLanguage(locale.code)}>{locale.label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SwitchLanguage;
