/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
    theme: {
    extend: {
      fontFamily: {
        title: ["'Playwrite MX Guides'", "'Playwrite TZ Guides'", "serif"]
      }
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
    require('tailwindcss-animated')
  ],
}

