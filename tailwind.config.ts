import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
        'icon-move': 'icon-move 0.3s ease-in-out',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        'icon-move': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
