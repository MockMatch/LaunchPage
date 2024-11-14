// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
      'primary-text': '#2b2b2b',
      'secondary-text': '#777777',
    }},
  },
  plugins: [],
  important: true,
};
