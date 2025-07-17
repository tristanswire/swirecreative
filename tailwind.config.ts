import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plusjakarta)", "sans-serif"], // Body/UI
        serif: ["var(--font-playfair)", "serif"],        // Headings
      }
    },
  },
} satisfies Config;
