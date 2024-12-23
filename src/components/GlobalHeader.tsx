import Image from "next/image";
import { NavigationMenuBar } from "./NavigationMenuBar";
import Logo from "@/assets/images/logo.webp";
import Divider from "./Divider";

const GlobalHeader = ({ locale }: { locale: string }) => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <Image src={Logo} alt="SweetNest Logo" width={70} />
        <NavigationMenuBar locale={locale} />
      </div>

      <Divider />
    </>
  );
};

export default GlobalHeader;
