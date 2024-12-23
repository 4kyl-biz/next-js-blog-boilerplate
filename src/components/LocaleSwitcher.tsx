"use client";

import { usePathname, useRouter } from "next/navigation";
import classes from "@/styles/LocaleSwitcher.module.css";
import { ChangeEvent } from "react";

export default function LocaleSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

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
