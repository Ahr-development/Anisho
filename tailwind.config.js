/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },

      animation: {
        'gradient': 'gradient 8s linear infinite',
    },
    keyframes: {
        'gradient': {
            to: { 'background-position': '200% center' },
        }
    } ,             
      screens: {

        'max-h-476': {'raw': '(max-height: 476px)'},
        'max-w-1760': {'raw': '(max-width: 1760px)'},
        'min-w-1560': {'raw': '(min-width: 1560px)'},
        'max-w-1500': {'raw': '(min-width: 1500px)'},

        'min-w-1420': {'raw': '(min-width: 1420px)'},
        'max-w-1420': {'raw': '(max-width: 1420px)'},
        'max-w-1350': {'raw': '(max-width: 1350px)'},

        'max-w-1310': {'raw': '(max-width: 1420px)'},
        'max-w-1255': {'raw': '(max-width: 1255px)'},
        'min-w-1255': {'raw': '(min-width: 1255px)'},

        'max-w-1185': {'raw': '(max-width: 1185px)'},
        'max-w-1088': {'raw': '(max-width: 1088px)'},
        'max-w-1110': {'raw': '(max-width: 1110px)'},


        'max-w-929': {'raw': '(max-width: 929px)'},
        'max-w-890': {'raw': '(max-width: 890px)'},
        'min-w-890': {'raw': '(min-width: 890px)'},

        'max-w-850': {'raw': '(max-width: 850px)'},
        'max-w-767': {'raw': '(max-width: 767px)'},

        'max-w-761': {'raw': '(max-width: 761px)'},
        'max-w-702': {'raw': '(max-width: 702px)'},
        'max-w-672': {'raw': '(max-width: 672px)'},
        'max-w-640': {'raw': '(max-width: 640px)'},
        'min-w-673': {'raw': '(min-width: 673px)'},
        'max-w-560': {'raw': '(max-width: 560px)'},
        'min-w-561': {'raw': '(min-width: 561px)'},
        'max-w-500': {'raw': '(max-width: 500px)'},
        'max-w-493': {'raw': '(max-width: 493px)'},
        'max-w-480': {'raw': '(max-width: 480px)'},
        'max-w-430': {'raw': '(max-width: 430px)'},
        'max-w-391': {'raw': '(max-width: 391px)'},
        'min-w-390': {'raw': '(min-width: 390px)'},
        'max-w-375': {'raw': '(max-width: 375px)'},
        'max-w-372': {'raw': '(max-width: 372px)'},
        'max-w-349': {'raw': '(max-width: 349px)'},
        'max-w-200': {'raw': '(max-width: 200px)'},
      }
    },
  },
  plugins: [],
};
