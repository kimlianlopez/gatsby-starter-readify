import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideStyles = ({ rhythm }, options) => ({
  'h1, h2, h3, h4, h5, h6': {
    marginTop: rhythm(0.5),
    marginBottom: rhythm(0.5)
  },
  p: {
    margin: `${rhythm(0.25)} 0px`
  }
});

const typography = new Typography(fairyGatesTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
