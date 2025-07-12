const { rgbaColor } = require('react-native-reanimated/lib/typescript/Colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
    extend: {
      primary: '#030014',
    },
    },
    plugins: [],
}