import { useTranslations } from "next-intl";

const GlobalFooter = () => {
  const t = useTranslations("Metadata");

  return (
    <footer className="text-sm text-center text-gray-400 py-4">
      <p>© Copyright 2024 {t("brand_name")}. Powered with ♥ by 4kyl_biz.</p>
    </footer>
  );
};

export default GlobalFooter;
