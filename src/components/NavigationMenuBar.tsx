import { Link } from "@/i18n/routing";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

export function NavigationMenuBar({ locale }: { locale: string }) {
  const t = useTranslations("NavigationMenuBar");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" className={navigationMenuTriggerStyle()}>
            {t("home")}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" className={navigationMenuTriggerStyle()}>
            {t("about")}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/product" className={navigationMenuTriggerStyle()}>
            {t("product")}
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <LocaleSwitcher locale={locale} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
