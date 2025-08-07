# GEMINI Project Analysis

## Project Overview

This is a portfolio website built with [Astro](https://astro.build/), a modern web framework for building fast, content-driven websites. It utilizes [React](https://react.dev/) for interactive components and [Tailwind CSS](https://tailwindcss.com/) for styling. The project is configured to be deployed as a standalone Node.js server.

The project structure follows the standard Astro layout:

- `src/pages`: Contains the pages of the website.
- `src/components`: Contains reusable components, including Astro and React components.
- `src/layouts`: Contains the basic HTML structure of the pages.
- `public`: Contains static assets like images and icons.

## Building and Running

The following commands are available to work with the project:

| Command | Description |
| :--- | :--- |
| `npm install` | Installs the project dependencies. |
| `npm run dev` | Starts the local development server at `localhost:4321`. |
| `npm run build` | Builds the project for production in the `dist/` directory. |
| `npm run preview` | Previews the production build locally. |
| `npm start` | Starts the application in production mode. |

## Development Conventions

- **Styling**: The project uses Tailwind CSS for styling. The configuration is in the `tailwind.config.mjs` file.
- **Linting and Formatting**: The project uses Prettier for code formatting. The configuration is in the `.prettierrc` file.
- **TypeScript**: The project uses TypeScript for type checking. The configuration is in the `tsconfig.json` file.
- **Aliases**: The project uses aliases for importing modules. The following aliases are configured:
  - `@`: `src/`
  - `@components`: `src/components`
