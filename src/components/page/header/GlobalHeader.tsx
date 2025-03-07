import Image from "next/image";
import Logo from "@/assets/images/SN-logo.png";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import SN_URL from "@/utils/urls";
import Navbar from "./NavBar";

const GlobalHeader = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavigationMenuBar");

  return (
    <div className="relative w-full flex items-center justify-between">
      <Image src={Logo} alt="SweetNest Logo" width={250} height={150} />

      <Navbar locale={locale} />

      <Button
        className="hover:opacity-80 bg-accent text-white self-start hidden md:block"
        variant="default"
        asChild
      >
        <Link className="px-4 py-3" href={SN_URL.contact}>
          {t("getFreeQuote").toLocaleUpperCase()}
        </Link>
      </Button>
    </div>
  );
};

export default GlobalHeader;
