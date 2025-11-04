# Currency converter

## Project Overview

This project uses TypeScript, Vite, Eslint and Prettier for code quality.

## Architectural Decisions

### Frameworks and Libraries

- **React 19**: Chosen for its component-based architecture and ecosystem.
- **TypeScript**: Provides static typing for better code quality and maintainability.
- **Vite**: Selected for its fast build times and modern tooling.
- **Tailwind CSS**: Utilized for styling and component composition.

### Code Quality Tools

- **ESLint**: Configured with TypeScript and React plugins to enforce best practices.
- **Prettier**: Ensures consistent code formatting.

### TypeScript Configuration

- Paths are aliased for cleaner imports (e.g., `@components/*`, `@assets/*`).
- Strict mode is enabled for better type safety.

### Package Management

- Dependencies are managed via `yarn`.
- Scripts are defined in `package.json` for common tasks.

## Available Scripts

### `yarn dev`

Runs the app in development mode.

### `yarn build`

Builds the app for production.

- Outputs optimized files to the `dist` folder.

### `yarn lint`

Runs ESLint to check for code quality issues.

- Ensures adherence to coding standards.
- Reports unused directives and enforces zero warnings.

### `yarn format`

Formats code using Prettier.

- Applies consistent styling to all files.
- Targets `.js`, `.jsx`, `.ts`, `.tsx`, `.css`, `.md`, and `.json` files.

## Additional Notes

- This project is configured for modern browsers as per the `browserslist` settings.
- The development environment supports React's Strict Mode for highlighting potential issues.
- Caching is enabled via saving data to localStorage.
- Used vatcomply API to fetch rates because of no API key requirement.
- Used tailwindcss to accelerate styling process.
- Used React Compiler for the most efficient automatic memoization.
- Deployed version [link](https://currency-converter-skelvsh.netlify.app/)
