import { NextPage } from "next";
import { useTranslations } from "next-intl";

const Page: NextPage = ({}) => {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Page;
