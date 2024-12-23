"use client";

import { usePathname, useRouter } from "next/navigation";
import classes from "@/styles/LocaleSwitcher.module.css";
import { ChangeEvent } from "react";
import { useTranslations } from "next-intl";

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations("LocaleSwitcher");

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    const newPathname = `/${selectedLocale}${pathname.replace(
      /^\/(en|zh)/,
      ""
    )}`;
    router.push(newPathname);
  };

  return (
    <div>
      <h1>
        {t("title")} {locale}
      </h1>
      <select
        className={classes["locale-switcher"]}
        value={locale}
        onChange={handleLocaleChange}
      >
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
}
