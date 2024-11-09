import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conoc":
          "conic-gradient(font 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sora : [`var(--font-sora)`, `sans-serif`]
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
export default config;
