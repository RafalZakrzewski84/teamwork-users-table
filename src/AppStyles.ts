import commonStyles from './constants/commonStyles';
import sizes from './constants/sizes';

const styles = {
  app: {
    ...commonStyles.flexContainer,
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  container: {
    ...commonStyles.flexContainer,
    flexDirection: 'column',
    [sizes.down('xl')]: {
      width: '50%',
    },
    [sizes.down('md')]: {
      width: '70%',
    },
    [sizes.down('xs')]: {
      width: '90%',
    },
  },

  titleContainer: {
    ...commonStyles.flexContainer,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    ...commonStyles.boldText,
    margin: '0',
    marginBottom: commonStyles.spaces.small,
    width: '100%',
    '& h1': {
      fontSize: commonStyles.font.big,
      color: commonStyles.colors.black,
    },
    '& p': {
      fontSize: commonStyles.font.medium,
      color: commonStyles.colors.yellow,
    },
  },

  searchContainer: {
    margin: '0',
    width: '100%',
    marginBottom: commonStyles.spaces.medium,
    position: 'relative',
  },

  input: {
    backgroundColor: 'transparent',
    border: `3px solid ${commonStyles.colors.black}`,
    borderRadius: '4px',
    color: commonStyles.colors.black,
    fontSize: commonStyles.font.small,
    ...commonStyles.boldText,
    display: 'inline-block',
    margin: '0',
    outline: 'none',
    padding: '7px 14px 9px',
    transition: commonStyles.transition,
    '&:focus': {
      borderColor: commonStyles.colors.yellow,
    },
    '&:disabled': {
      color: commonStyles.colors.grey,
      border: `3px solid ${commonStyles.colors.grey}`,
      pointerEvents: 'none',
    },
  },

  label: {
    position: 'absolute',
    top: '10px',
    left: '14px',
    color: commonStyles.colors.grey,
    transition: commonStyles.transition,
    pointerEvents: 'none',
    userSelect: 'none',
    '&:focus': {
      transform: 'translateY(-20px)',
      fontSize: '0.8rem',
    },
  },
  labelNone: {
    display: 'none',
  },

  tableContainer: {
    width: '100%',
    minHeight: '451px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '0',
    marginTop: commonStyles.spaces.medium,
    width: '100%',
  },

  icon: {
    color: commonStyles.colors.black,
    fontSize: commonStyles.font.medium,
    marginRight: '10px',
    transition: commonStyles.transition,
    ...commonStyles.hoverEffect,
  },

  loaderContainer: {
    position: 'relative',
  },

  loader: {
    padding: '1rem',
    borderRadius: '5px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  loaderText: {
    fontSize: '0.7rem',
    ...commonStyles.boldText,
    margin: '0',
    marginBottom: '32px',
    color: commonStyles.colors.grey,
  },

  spinner: {
    border: '10px solid rgba(0, 0, 0, 0.1)',
    borderTop: `10px solid ${commonStyles.colors.yellow}`,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: '$spin 1s linear infinite',
    marginBottom: '10px',
  },

  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

export default styles;
