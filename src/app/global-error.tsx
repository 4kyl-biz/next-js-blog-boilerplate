"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

// Error boundaries must be Client Components
export default function GlobalError({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("GlobalError");

  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>{t("description")}</h2>
        <Button onClick={() => reset()}>{t("action")}</Button>
      </body>
    </html>
  );
}
