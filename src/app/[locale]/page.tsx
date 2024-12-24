import HomeImage from "@/assets/images/Wintergarden-Skylight-Blinds.jpg";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const page = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: `${page("title")} | ${t("brand_name")}`,
  };
}

export default function HomePage() {
  return (
    <div>
      <main>
        <section className="relative">
          <Image
            src={HomeImage}
            alt="Premium Custom Blinds"
            className="mx-auto"
            width={10000}
          />
        </section>

        <section className="bg-gray-100 py-12 text-center">
          <h2 className="text-3xl font-bold">Premium Custom Blinds</h2>
          <p className="text-lg mt-4">
            Shop the best blinds at the most affordable prices.
          </p>
        </section>
        <section id="products" className="py-12">
          <h2 className="text-2xl font-bold text-center">Our Products</h2>
          {/* Add product components here */}
        </section>
        <section id="about" className="bg-gray-50 py-12 text-center">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-lg mt-4">
            We specialize in high-quality, affordable blinds and windows.
          </p>
        </section>
      </main>
    </div>
  );
}
