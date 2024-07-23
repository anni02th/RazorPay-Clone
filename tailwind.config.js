/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      
        fontFamily:{
          mullish:["MulishVariable","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],
      },
      colors:{
        deepBlue:"#02042a",
        lightBlue:"#2b84ea",
        lighterBlue300:"#4b94ed",
        lighterBlue500:"#0b72e7",
        greenLight:"#61cea6",
        grayText:"#818597",
        lightgray:"#e2e2e2",
        grayBlue:"#344a6c",
        deepBlueHead:"#162f56",
        gray2:"#525a76"
      }
    }
  },
  plugins: [],
}

