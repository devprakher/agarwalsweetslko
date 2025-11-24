import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#333333",
        primary: "#e94560",
        secondary: "#ffa500",
        accent: "#8a2bee",
        muted: "#f1f5f9",
        destructive: "#ff0000",
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#e94560",
        // [#ffffff]: "#ffffff",
        popover: "#ffffff",
      },
      
    },
  },
  plugins: [],
};

export default config;
