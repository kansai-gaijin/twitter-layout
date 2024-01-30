import type { Config } from "tailwindcss";

const sidebarWidth = 240;
const contentWidth = 1200;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
    extend: {
      maxWidth: {
        content: `${contentWidth}px`,
        sidebar: `${sidebarWidth}px`,
      },
      width: {
        content: `${contentWidth}px`,
        sidebar: `${sidebarWidth}px`,
      },
      minWidth: {
        content: `${contentWidth}px`,
        sidebar: `${sidebarWidth}px`,
      },
    },
  },
  plugins: [],
};
export default config;
