// Since we have a root `not-found.tsx` page, a layout file
// is required, even if it's just passing children through.
// See https://next-intl.dev/docs/environments/error-files for more information.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
