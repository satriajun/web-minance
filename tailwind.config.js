/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./contact.html",
    "./download.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',    // Extra small devices (phones)
      'md': '768px',    // Medium devices (tablet)
      'lg': '1024px',   // Large devices (small desktops)
      'xl': '1280px',   // Extra large devices (large desktops)
      '2xl': '1440px',  // 2x Extra large devices (larger screens)
    },
    container: {
      center: true,  // Center container by default
      padding: {
        DEFAULT: '1rem', // Padding default
        sm: '1.5rem',  // Padding for small screens
        md: '2rem',    // Padding for medium screens
        lg: '40px',  // Padding for large screens
        xl: '60px',    // Padding for extra large screens
      },
    },
    extend: {
      backgroundImage: {
        'hero': "url('public/backgorund.png')",
        'heroflags': "url('public/bgplags.png')",
        'herofast': "url('public/bgfast.png')",
        'heroblack': "url('public/bgblack.png')",
        'herofooter': "url('public/bgfooter.png')",
        'herodownload': "url('public/bgdownload.png')",
        'heroios': "url('public/cardiOs.png')",
        'heroandroid': "url('public/CardAndroid.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinsBold: ["Poppins Bold", "sans-serif"],
        inter : ["Inter", "sans-serif"],
      },
      colors: {
        bgblue: "#EBF2FF",
        bordergrey: "#E3E3E3",
      }
  },
  plugins: [],
}
}