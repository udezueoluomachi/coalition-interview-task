/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}","./index.html"],
    theme: {
      extend: {
        backgroundImage : {
          "section-1" : "url('/section-1.png')",
          "peak" : "url('/peak.png')",
          "last-section-tab-1" : "url('/last-section-tab-1.png')",
          "last-section-tab-2" : "url('/last-section-tab-2.png')",
          "carousel-1" : "url('/carousel-1.png')",
          "carousel-2" : "url('/carousel-2.png')",
          "Logo" : "url('/Logo.png')",
        }
      },
    },
    plugins: [],
  }