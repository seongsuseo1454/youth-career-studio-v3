import type { Config } from "tailwindcss";

export default {
  content: [
     "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1f5fff", dark: "#173cb8" }
      }
    }
  },
  plugins: []
} satisfies Config;