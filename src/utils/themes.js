const spacing = {
  offsetTop: '100px',
  sectionContainer: '50px'
};

const color = {
  main: '#4ab2b0',
  secondary: '#b24a4c'
};

const themes = {
  green: {
    light: {
      color: {
        text: '#3d3d3d',
        headerText: '#212121',
        background: '#ffffff',
        ...color
      },
      spacing: {
        ...spacing
      }
    },

    dark: {
      color: {
        text: '#b3b3b3',
        headerText: '#d6d6d6',
        background: '#212121',
        ...color
      },
      spacing: {
        ...spacing
      }
    }
  }
};

export default theme => themes[theme];
