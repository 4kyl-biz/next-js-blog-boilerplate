import { NextPage } from "next";
import { useTranslations } from "next-intl";

const Page: NextPage = ({}) => {
  const t = useTranslations("AboutPage");

  return (
    <div>
      <main className="py-12">
        <section id="about" className="text-center">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            At My Blinds Shop, we specialize in providing high-quality,
            custom-made blinds for homes and businesses. Our mission is to offer
            affordable, durable, and stylish solutions that enhance the look and
            functionality of your space.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Our Values</h3>
            <ul className="list-disc list-inside mt-4">
              <li>Quality craftsmanship</li>
              <li>Customer satisfaction</li>
              <li>Affordable pricing</li>
              <li>Local manufacturing</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
