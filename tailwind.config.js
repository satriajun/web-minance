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
        'hero': "url('/backgorund.png')",
        'heroflags': "url('/bgplags.png')",
        'herofast': "url('/bgfast.png')",
        'heroblack': "url('/bgblack.png')",
        'herofooter': "url('/bgfooter.png')",
        'herodownload': "url('/bgdownload.png')",
        'heroios': "url('/cardiOs.png')",
        'heroandroid': "url('/CardAndroid.png')",
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