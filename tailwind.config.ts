import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {
      colors: {
        "fundly-blue": "#4086F7", // Primary Blue / Action Blue
        "off-white": "#F7F8F9", // Very Light Gray / Background Gray
        "light-gray": "#E6E8EA", // Light Gray / Border Gray
        "medium-gray": "#9FA4A9", // Medium Gray / Text Gray
        "dark-gray": "#333333", // Dark Gray / Almost Black
        "success-green": "#28A745", // Success / Positive Green
        "error-red": "#DC3545", // Error / Negative Red
        "warning-yellow": "#FFC107", // Warning / Attention Yellow
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
