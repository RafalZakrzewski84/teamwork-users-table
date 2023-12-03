import commonStyles from '../constants/commonStyles';

const styles = {
  container: {
    ...commonStyles.flexContainer,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.4)',
    transition: commonStyles.transition,
  },
  card: {
    background: 'rgba(255, 255, 255, 1)',
    maxWidth: '470px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  content: {
    padding: '32px',
  },
  goBack: {
    position: 'absolute',
    cursor: 'pointer',
    top: '16px',
    right: '16px',
    fontSize: commonStyles.font.big,
    '&:hover': {
      color: commonStyles.colors.red,
    },
  },
  title: {
    marginBottom: '16px',
    '& h1': {
      fontSize: commonStyles.font.big,
      color: commonStyles.colors.red,
      '& p': {
        fontSize: commonStyles.font.small,
        color: commonStyles.colors.black,
      },
    },
  },
  infoContainer: {
    display: 'flex',
    gap: '20px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: 300, // Adjust the max height as needed
    textAlign: 'center',
  },
  info: {
    '& h1': {
      fontSize: commonStyles.font.medium,
      color: commonStyles.colors.red,
      marginBottom: '8px',
    },
    '& p': {
      fontSize: commonStyles.font.small,
      color: commonStyles.colors.black,
      marginBottom: '5px',
    },
  },
};

export default styles;
