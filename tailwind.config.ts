import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./public/**/*.{html,svg}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(215, 70%, 40%)",
        },
      },
    },
  },
  plugins: [],
}
export default config
