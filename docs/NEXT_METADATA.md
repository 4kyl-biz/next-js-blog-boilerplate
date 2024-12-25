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

# Example Metadata for SEO Optimization in Next.js

Below is a comprehensive example of metadata you can include in your Next.js application to improve SEO.

---

## Metadata Configuration

### Static Metadata Example

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Page Title (Essential for SEO)
  title: "High-Quality Curtains | Sweet Nest Curtain & Blinds",

  // Page Description (Concise and Engaging)
  description:
    "Discover premium curtains and blinds tailored for every style. Free consultation available.",

  // Canonical URL (Prevents Duplicate Content Issues)
  canonical: "https://example.com/products/curtains",

  // Keywords (Relevant to the Page Content)
  keywords: ["curtains", "blinds", "home decor", "premium curtains"],

  // Robots Metadata (Search Engine Crawling Directives)
  robots: {
    index: true,
    follow: true,
    noarchive: false,
  },

  // Open Graph Metadata (For Social Sharing)
  openGraph: {
    title: "Premium Curtains | Sweet Nest Curtain & Blinds",
    description:
      "Explore our exclusive range of curtains and blinds. Perfect for your home decor.",
    url: "https://example.com/products/curtains",
    images: [
      {
        url: "https://example.com/images/og-curtain.jpg",
        width: 1200,
        height: 630,
        alt: "Elegant curtains in a modern living room",
      },
    ],
    siteName: "Sweet Nest Curtain & Blinds",
    type: "website",
  },

  // Twitter Card Metadata (Enhanced Sharing on Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Curtains for Every Style | Sweet Nest Curtain & Blinds",
    description: "Shop our high-quality curtains and blinds now!",
    images: ["https://example.com/images/twitter-curtain.jpg"],
  },

  // Viewport Metadata (Mobile Optimization)
  viewport: "width=device-width, initial-scale=1.0",

  // Author Metadata (Attribution)
  author: "Sweet Nest Curtain & Blinds",
};

export default function Page() {
  return (
    <div>
      <h1>Welcome to Sweet Nest Curtain & Blinds</h1>
    </div>
  );
}
```

---

### Dynamic Metadata Example

For pages where metadata needs to be generated dynamically based on content or parameters, use the `generateMetadata` function:

```typescript
import { Metadata } from "next";

interface Props {
  params: { productId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchProductDetails(params.productId);

  return {
    title: `${product.name} | Sweet Nest Curtain & Blinds`,
    description: `Explore details about ${product.name}. Premium quality for your home decor needs.`,
    openGraph: {
      title: `${product.name} | Sweet Nest Curtain & Blinds`,
      description: `Explore details about ${product.name}. Premium quality for your home decor needs.`,
      url: `https://example.com/products/${params.productId}`,
      images: [
        {
          url: product.imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Sweet Nest Curtain & Blinds`,
      description: `Explore details about ${product.name}. Premium quality for your home decor needs.`,
      images: [product.imageUrl],
    },
  };
}

async function fetchProductDetails(productId: string) {
  // Simulate fetching product details from an API or database
  return {
    name: "Luxury Curtain",
    imageUrl: "https://example.com/images/luxury-curtain.jpg",
  };
}

export default function ProductPage({ params }: Props) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Details about product ID: {params.productId}</p>
    </div>
  );
}
```

---

### JSON-LD Structured Data Example

To add rich snippets for better search visibility, include JSON-LD in your page:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Curtains",
    "description": "High-quality curtains for a stylish home.",
    "image": "https://example.com/images/curtain.jpg",
    "brand": "Sweet Nest",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "99.99",
      "url": "https://example.com/products/curtain"
    }
  }
</script>
```

---

## Key Considerations for SEO

1. **Title and Description:** Ensure they are unique and include primary keywords.
2. **Images:** Use high-quality and descriptive images for Open Graph and Twitter metadata.
3. **Keywords:** Focus on relevant and well-researched keywords.
4. **Dynamic Metadata:** Use the `generateMetadata` function for pages with dynamic content.
5. **Audits:** Regularly review and optimize metadata as your content evolves.

By including these metadata elements, you can significantly enhance your website's SEO performance and visibility on search engines and social platforms.
