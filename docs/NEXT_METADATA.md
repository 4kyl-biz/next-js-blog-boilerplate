# Next.js Metadata API Documentation

## Overview

In Next.js 15, the Metadata API allows developers to define and optimize metadata for web applications. This enhances SEO, social shareability, and overall application performance.

---

## Adding Metadata

### Static Metadata

Static metadata can be defined by exporting a `metadata` object from the `layout.tsx` or `page.tsx` file.

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description.",
};

export default function Page() {
  return (
    <div>
      <h1>Welcome to the Page</h1>
    </div>
  );
}
```

### Dynamic Metadata

Dynamic metadata is useful for pages where the metadata depends on fetched or computed data. Use the `generateMetadata` function to implement this feature.

```typescript
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData();
  return {
    title: data.title,
    description: data.description,
  };
}

export default function Page() {
  return (
    <div>
      <h1>Dynamic Metadata Page</h1>
    </div>
  );
}
```

---

## File-based Metadata

Next.js also supports file-based metadata configuration by placing specific files in the route directories.

- **Favicons and Icons:** Add `favicon.ico`, `apple-icon.jpg`, or `icon.jpg` in the `/app` directory.
- **Open Graph and Twitter Images:** Include `opengraph-image.jpg` and `twitter-image.jpg` in the same directory.
- **Robots and Sitemap Files:** Add `robots.txt` and `sitemap.xml` to manage search engine crawling and indexing.

Next.js will automatically use these files to generate corresponding `<head>` elements.

---

## Dynamic Open Graph Images

For enhanced social media sharing, you can create dynamic Open Graph images using the `ImageResponse` constructor.

---

## Benefits

- Centralized metadata management for SEO and social sharing.
- Dynamic capabilities for custom metadata generation.
- Automatic handling of common metadata elements like favicons and robots.txt.

For more details, refer to the [official Next.js documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).
