import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm:'36em',
      md: '48em',
      
      lg:'76em'
    },
    extend: {
      colors: {
        darkPurple: "hsla(236, 53%, 3%, 0.7)",
        red1: "hsla(0, 100%, 50%, 1)",
        
        
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
