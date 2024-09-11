/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "DM Sans, sans-serif",
      },
      fontSize: {
        base: '18px',
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "cyan": "hsl(186, 34%, 60%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        "cream": "hsl(27, 66%, 92%)",
        "pale-orange": "hsl(33, 100%, 98%)",
      }
    },
  },
  plugins: [],
}

