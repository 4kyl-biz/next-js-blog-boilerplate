import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/routing";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import SN_URL from "@/utils/urls";

const Navbar = ({ locale }: { locale: string }) => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Full Menu */}

          <div className="hidden md:flex space-x-4">
            <FullMenu locale={locale} />
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <LocaleSwitcher locale={locale} />

            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

const FullMenu = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavigationMenuBar");
  const allCategories = useTranslations("AllCategories");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={SN_URL.home} className={navigationMenuTriggerStyle()}>
            {t("home")}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            href={SN_URL.product.shutter.root}
            className={navigationMenuTriggerStyle()}
          >
            {allCategories("shutters")}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={SN_URL.contact} className={navigationMenuTriggerStyle()}>
            {t("contact")}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <LocaleSwitcher locale={locale} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const HamburgerMenu = () => {
  const t = useTranslations("NavigationMenuBar");
  const allCategories = useTranslations("AllCategories");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-2">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link
          href={SN_URL.home}
          className={"block px-4 py-2 rounded hover:bg-accent"}
        >
          <DropdownMenuItem>{t("home")}</DropdownMenuItem>
        </Link>
        <Link
          href={SN_URL.product.curtains.root}
          className={"block px-4 py-2 rounded hover:bg-accent"}
        >
          <DropdownMenuItem>{allCategories("curtains")}</DropdownMenuItem>
        </Link>
        <Link
          href={SN_URL.product.blinds.root}
          className={"block px-4 py-2 rounded hover:bg-accent"}
        >
          <DropdownMenuItem>{allCategories("blinds")}</DropdownMenuItem>
        </Link>
        <Link
          href={SN_URL.product.shutter.root}
          className={"block px-4 py-2 rounded hover:bg-accent"}
        >
          <DropdownMenuItem>{allCategories("shutters")}</DropdownMenuItem>
        </Link>
        <Link
          href={SN_URL.contact}
          className={"block px-4 py-2 rounded hover:bg-accent"}
        >
          <DropdownMenuItem>{t("contact")}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Navbar;
