const commonStyles = {
  colors: {
    grey: 'rgb(100, 105, 108)',
    yellow: 'rgb(255 232 31)',
    yellowish: 'rgba(255, 232, 31, 0.7)',
    red: 'rgb(188, 30, 34)',
    black: 'rgb(0 0 0)',
    white: 'rgb(255 255 255)',
    blue: 'rgb(46,85,124)',
    tableGrey: 'rgb(242, 242, 242)',
    tableBorder: 'rgb(221, 221, 221)',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boldText: {
    fontWeight: 'bold',
  },

  transition: {
    transition: 'all 300ms cubic-bezier(.23, 1, 0.32, 1)',
  },

  hoverEffect: {
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
    },
  },
  spaces: {
    small: '16px',
    medium: '32px',
  },

  font: {
    small: '1rem',
    medium: '1.5rem',
    big: '2.2rem',
  },
};

export default commonStyles;
