import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/SN-logo.png";
import SN_URL from "@/utils/urls";
import { useTranslations } from "next-intl";

const FooterNavigation = () => {
  const t = useTranslations("Footer");
  const categories = useTranslations("AllCategories");
  const email = t("email");

  return (
    <div className="bg-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <Image
              className="mb-4"
              src={Logo}
              alt="SweetNest Logo"
              width={300}
              height={100}
            />

            <p className="text-gray-700">{t("description")}</p>
            {/* <div className="flex space-x-4 pt-4">
              <Link
                href="#"
                className="bg-primary-foreground p-2 rounded-full hover:opacity-90"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="#"
                className="bg-primary-foreground p-2 rounded-full hover:opacity-90"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
            </div> */}
          </div>

          {/* Column 2 - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-primary text-xl font-medium mb-3">
                {t("phoneTitle")}
              </h3>
              <p className="text-gray-700">{t("phone")}</p>
            </div>
            <div>
              <h3 className="text-primary text-xl font-medium mb-3">
                {t("emailTitle")}
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-gray-700 hover:text-primary"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Column 3 - Showroom */}
          <div className="space-y-6">
            <div>
              <h3 className="text-primary text-xl font-medium mb-3">
                {t("showroomTitle")}
              </h3>
              <p className="text-gray-700">{t("showroom")}</p>
            </div>
            <div>
              <h3 className="text-primary text-xl font-medium mb-3">
                {t("tradingHours")}
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  {t("mondayToFriday")} {t("mondayToFridayHours")}
                </p>
                <p className="text-gray-700">
                  {t("weekend")} {t("byAppointment")}
                </p>
              </div>
            </div>
          </div>

          {/* Column 4 - Products and Mobile Showroom */}
          <div className="space-y-6">
            <div>
              <h3 className="text-primary text-xl font-medium mb-3">
                {t("productsTitle")}
              </h3>
              <ul className="space-y-2 columns-3">
                <li>
                  <Link
                    href={SN_URL.product.curtains.root}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("curtains")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.curtains.fabric}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("fabric")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.curtains.sheerCurtains}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("sheerCurtains")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.curtains.curtainHeadings}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("curtainHeadings")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.blinds.root}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("blinds")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.blinds.rollerBlinds}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("rollerBlinds")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.blinds.venetianBlinds}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("venetianBlinds")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.blinds.romanBlinds}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("romanBlinds")}
                  </Link>
                </li>

                <li>
                  <Link
                    href={SN_URL.product.blinds.verticalBlinds}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("verticalBlinds")}
                  </Link>
                </li>

                <li>
                  <Link
                    href={SN_URL.product.blinds.zebraBlinds}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("zebraBlinds")}
                  </Link>
                </li>

                <li>
                  <Link
                    href={SN_URL.product.blinds.shangriLaBlinds}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("shangriLaBlinds")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={SN_URL.product.shutter.root}
                    className="text-gray-700 hover:text-primary"
                  >
                    {categories("shutters")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
                <span className="text-[#8B4513]">🚐</span>
                <span>{t("mobileShowroom")}</span>
              </h3>
              <p className="text-gray-700">{t("mobileShowroomDescription")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex gap-6 mt-8 pt-8 border-t">
          <Link
            href="/cookie-policy"
            className="text-gray-700 hover:text-primary"
          >
            {t("cookiesPolicy")}
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-700 hover:text-primary"
          >
            {t("privacyPolicy")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
