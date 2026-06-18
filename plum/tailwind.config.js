/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#5A2D81",
        secondary: "#9B5DE5",
        accent: "#6ACC60",
        background: "#FFFFFF",
        text: "#333333",
        muted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
