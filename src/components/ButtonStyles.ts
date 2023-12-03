import commonStyles from '../constants/commonStyles';

const styles = {
  button: {
    backgroundColor: 'transparent',
    border: `3px solid ${commonStyles.colors.yellow}`,
    borderRadius: '4px',
    color: commonStyles.colors.black,
    fontSize: commonStyles.font.small,
    fontWeight: commonStyles.boldText,
    cursor: 'pointer',
    display: 'inline-block',
    margin: '0',
    marginLeft: '10px',
    outline: 'none',
    padding: '8px 16px',
    textAlign: 'center',
    transition: commonStyles.transition,
    '&:hover': {
      color: commonStyles.colors.yellow,
      border: 'none',
      backgroundColor: commonStyles.colors.black,
      boxShadow: 'rgba(0, 0, 0, 0.25) 0 8px 15px',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: 'none',
      transform: 'translateY(0)',
    },
    '&:disabled': {
      color: commonStyles.colors.grey,
      border: `3px solid ${commonStyles.colors.grey}`,
      pointerEvents: 'none',
    },
  },
};

export default styles;
