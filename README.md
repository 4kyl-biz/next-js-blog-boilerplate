# Next.js Blog Template

This is a **Next.js + TypeScript** boilerplate for creating static blogs or websites. The template is designed to be highly reusable, customizable, and simple to adapt for your projects.

## Features

- **Next.js** for server-side rendering and static site generation.
- **TypeScript** for type safety and better development experience.
- **CSS Modules** for scoped and maintainable styles.
- **Custom Themes**: Easily define and switch between different themes using CSS custom properties.
- **Locale Support**: Easily switch between different locales for internationalization.
- **Dynamic Routing** for blog posts and other pages.
- **SEO-Friendly**: Optimized structure for search engines.

## Project Structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── locales                         # Locales folder (i18n messages)
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── api                         # API Route Handlers
│   ├── components                  # React components
│     ├── page                      # Page components
│     ├── ui                        # UI components generated by shadcn-ui
│   ├── libs                        # 3rd party libraries configuration
│   ├── models                      # Database models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
└── tsconfig.json                   # TypeScript configuration
```

### Key Files

- **`src/styles/variables.css`**: Defines global CSS custom properties for colors and other reusable design tokens.
- **`src/styles/themes/`**: Contains theme files (`default.css`, `alternative.css`) that use custom properties for easy styling.
- **`src/utils/localeManager.ts`**: Handles locale changes and provides utility functions for internationalization.
- **`src/components/`**: Contains reusable components like the header and footer.
- **`src/pages/`**: Defines the main pages for the site, including blog posts and static pages.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Yarn or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/next-js-blog-boilerplate.git
   cd next-js-blog-boilerplate
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see your app.

### Build for Production

To build the project for production:

```bash
yarn build
# or
npm run build
```

Start the production server:

```bash
yarn start
# or
npm start
```

### Dependencies

- **`react`**: A JavaScript library for building user interfaces. Used for building the frontend components and managing UI state.
- **`react-dom`**: Provides DOM-specific methods that allow React to interact with the browser's DOM.
- **`react-query`**: A data-fetching and state management library that simplifies data handling and caching in React.
- **`tailwindcss`**: A utility-first CSS framework used for styling the frontend components. It enables rapid, customizable design.
- **`next`**: The React framework for building static and dynamic websites with server-side rendering. Used for creating the full-stack app.
- **`zod`**: A TypeScript-first schema declaration and validation library. Used for validating user input on both the client and server side.
- **`@heroicons/react`**: Provides free, high-quality SVG icons for React applications. Used to display icons in various components.
- **`react-hook-form`**: A performant, flexible, and extensible form library for React. Used to handle form validation and state management.
- **`next-auth`**: An authentication library for Next.js applications, providing easy-to-use authentication workflows.

### Dev Dependencies

- **`typescript`**: A typed superset of JavaScript that compiles to plain JavaScript, providing static type-checking.
- **`@types/react`**: Type definitions for React to provide type safety and autocompletion within TypeScript projects.
- **`@types/node`**: Type definitions for Node.js to help with server-side logic in a TypeScript environment.
- **`eslint`**: A tool for identifying and fixing linting errors in JavaScript and TypeScript code.
- **`prettier`**: An opinionated code formatter used to enforce a consistent code style.
- **`postcss`**: Used in conjunction with Tailwind CSS for processing CSS files.
- **`autoprefixer`**: Adds vendor prefixes to CSS properties to ensure cross-browser compatibility.

## Locale Customization

- Please follow the [Next-Intl Instruction](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing)

## Theme Customization

Themes are managed using CSS custom properties. To add a new theme:

1. Create a new file in `src/styles/themes/` (e.g., `new-theme.css`).
2. Define your custom properties in the file:
   ```css
   :root {
     --primary-color: #ff5722;
     --secondary-color: #673ab7;
     --success-color: #8bc34a;
     --danger-color: #f44336;
     --background-color: #f5f5f5;
     --text-color: #212121;
   }
   ```
3. Update the theme toggle logic in `src/pages/_app.tsx` to include your new theme.

## Deployment

You can deploy this project to platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static hosting service.

### Deploying to Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment command:
   ```bash
   vercel
   ```
3. Follow the prompts to deploy your site.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the [MIT License](LICENSE).

---

Start building your blog today with this versatile Next.js template!
