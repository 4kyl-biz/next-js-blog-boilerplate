import { NextPage } from "next";
import { useTranslations } from "next-intl";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Page;
