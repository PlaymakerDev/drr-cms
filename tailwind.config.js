/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        'custom-blue': '#0080FE',
      },
    },
    fontFamily: {
      IBMPlexSansThaiThin: ['IBMPlexSansThai-Thin', ...defaultTheme.fontFamily.sans],
      IBMPlexSansThaiLight: ['IBMPlexSansThai-Light', ...defaultTheme.fontFamily.sans],
      IBMPlexSansThaiExtraLight: ['IBMPlexSansThai-ExtraLight', ...defaultTheme.fontFamily.sans],
      IBMPlexSansThaiMedium: ['IBMPlexSansThai-Medium', ...defaultTheme.fontFamily.sans],
      IBMPlexSansThaiRegular: ['IBMPlexSansThai-Regular', ...defaultTheme.fontFamily.sans],
      IBMPlexSansThaiSemiBold: ['IBMPlexSansThai-SemiBold', ...defaultTheme.fontFamily.sans],
      IBMPlexSansThaiBold: ['IBMPlexSansThai-Bold', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
