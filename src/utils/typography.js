import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  boldWeight: 1000,
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Raleway",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Literata", "Georgia", "serif"],
})
export default typography
export const rhythm = typography.rhythm
