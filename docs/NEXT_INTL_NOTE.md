# Introduction to Using `setRequestLocale` with `next-intl`

When building multilingual applications with `next-intl` and the Next.js App Router, it's crucial to set the locale properly for each page request. The `setRequestLocale` function ensures that the correct locale is applied to your pages, both for rendering content and metadata. Here's why and how you should use it.

---

## Why Use `setRequestLocale`?

### 1. **Ensure Correct Translations**

When a user navigates to a localized route (e.g., `/en/about` or `/zh/about`), `setRequestLocale` makes sure the correct language is used for rendering content. Without explicitly setting the locale, the application may fall back to a default locale or behave unpredictably.

### 2. **Support for Server-Side Rendering (SSR)**

With SSR, the locale needs to be determined and applied during the server's rendering phase. `setRequestLocale` ensures the server renders the page with the correct locale, providing a seamless experience for users.

### 3. **Locale-Specific Metadata**

Next.js metadata, such as titles and descriptions, should be localized to improve user experience and SEO. Using `setRequestLocale`, you can ensure metadata aligns with the selected locale.

---

## How to Use `setRequestLocale`

### Example: Setting Locale for a Page

In each page's `generateMetadata` and server-side function, use `setRequestLocale` to apply the locale dynamically based on the route parameters.

#### Directory Structure

```
app/
  [locale]/
    page.tsx
    layout.tsx
```

#### Page Implementation

```tsx
import { setRequestLocale } from "next-intl";

export async function generateMetadata({ params }) {
  setRequestLocale(params.locale);

  return {
    title: params.locale === "zh" ? "关于页面" : "About Page",
    description:
      params.locale === "zh" ? "这是关于页面" : "This is the about page",
  };
}

export default function AboutPage() {
  return <h1>{params.locale === "zh" ? "关于页面" : "About Page"}</h1>;
}
```

### Explanation

1. **Retrieve Locale from Route Parameters**: The `params.locale` value is extracted from the route (e.g., `en`, `zh`).
2. **Set Locale with `setRequestLocale`**: This ensures that the correct locale is applied for translations and metadata.
3. **Generate Localized Metadata**: Use the locale to dynamically set metadata such as the page title and description.

---

## Using Locale in Metadata

### Why Metadata Matters

Metadata is vital for:

- Improving SEO rankings for localized content.
- Displaying accurate information in search results and social previews.

### Adding Locale to Metadata

`next-intl` integrates seamlessly with Next.js metadata APIs. Here’s how to ensure metadata is localized:

#### Example Metadata Configuration

```tsx
import { setRequestLocale } from "next-intl";

export async function generateMetadata({ params }) {
  setRequestLocale(params.locale);

  return {
    title:
      params.locale === "zh" ? "欢迎来到我的网站" : "Welcome to My Website",
    description:
      params.locale === "zh"
        ? "这是一个多语言支持的网站"
        : "This is a multilingual website",
  };
}
```

---

## Best Practices

1. **Apply `setRequestLocale` Consistently**: Ensure `setRequestLocale` is used in every page and layout that requires locale-specific rendering.
2. **Validate Locales**: Always validate the incoming locale from route parameters to prevent unexpected behavior.
3. **Centralize Translation Files**: Organize your translations in a `locales` directory for easy management.

---

## Conclusion

Using `setRequestLocale` in your `next-intl` implementation is essential for maintaining a robust multilingual application. It ensures:

- Accurate translations on every page.
- Locale-specific metadata for SEO and user experience.
- Smooth server-side rendering with correct locale settings.

By integrating `setRequestLocale` into your Next.js App Router project, you can provide a seamless and localized experience for your users.

See https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing for more info
