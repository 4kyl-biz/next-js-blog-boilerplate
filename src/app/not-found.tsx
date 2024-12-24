import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFoundError");

  return (
    <div className="mx-auto max-w-screen-lg p-4 text-center">
      <h2 className="mb-2">{t("description")}</h2>
      <Link href="/">{t("action")}</Link>
    </div>
  );
}
