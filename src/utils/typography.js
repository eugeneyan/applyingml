import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  boldWeight: 700,
  baseLineHeight: 1.666,
  headerFontFamily: ['Raleway', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'Georgia', 'serif'],
});
export default typography;
export const { rhythm } = typography;
