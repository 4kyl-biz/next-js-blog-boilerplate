// middleware.ts
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n/config";

export default createMiddleware({
  // Define your locales
  locales,

  // Set your default locale
  defaultLocale,

  // Enable locale prefix for all paths
  localePrefix: "always",

  // Enable redirects
  localeDetection: true,
});

// Configure matching paths
export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files
  // - _next
  // - and files in the public folder
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
