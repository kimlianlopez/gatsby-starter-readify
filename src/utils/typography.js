import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideStyles = ({ rhythm }, options) => ({
  'h1, h2, h3, h4, h5, h6': {
    marginTop: rhythm(1 / 2),
    marginBottom: rhythm(1 / 2)
  },
  p: {
    margin: `${rhythm(1 / 4)} 0px`
  }
});

const typography = new Typography(fairyGatesTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
