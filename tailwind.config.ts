import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        "size-active": {
          DEFAULT: "var(--size-active)",
          foreground: "var(--size-active-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        "product-border": "var(--product-border)",
        header: {
          DEFAULT: "var(--header)",
          foreground: "var(--header-foreground)",
          background: "var(--header-background)",
          primary: "var(--header-primary)",
          "primary-foreground": "var(--header-primary-foreground)",
          accent: "var(--header-accent)",
          "accent-foreground": "var(--header-accent-foreground)",
          border: "var(--header-border)",
          ring: "var(--header-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        "0": "0",
        "1": "1px",
        "2": "2px",
        "4": "4px",
        "8": "8px",
        DEFAULT: "var(--border-width)",
        "product-card": "1px",
      },
      stroke: {
        accent: "var(--accent)",
      },
      borderColor: {
        "product-border": "var(--product-border)",
        "hover-card": "var(--hover-card)",
      },
      scale: {
        "90": "0.9",
        "95": "0.95",
        "101": "1.01",
        "105": "1.05",
        "110": "1.1",
        "120": "1.2",
        "300": "3",
        "400": "4",
      },
      maxHeight: {
        viewport: "calc(100vh - 72px)",
      },
      minHeight: {
        viewport: "calc(100vh - 72px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
