import commonStyles from '../constants/commonStyles';
import sizes from '../constants/sizes';

const styles = {
  tableContainer: {
    maxWidth: '100%',
    flex: 1,
    [sizes.down('xl')]: {
      width: '750px',
    },
    [sizes.down('md')]: {
      width: '70%',
    },
    [sizes.down('xs')]: {
      width: '90%',
    },
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    transition: commonStyles.transition,
    fontSize: commonStyles.font.small,
    '& th': {
      backgroundColor: commonStyles.colors.tableGrey,
      padding: '12px',
      textAlign: 'left',
      borderBottom: `1px solid ${commonStyles.colors.tableBorder}`,
      minWidth: '120px',
      [sizes.down('md')]: {
        minWidth: '70px',
        fontSize: '0.7rem',
      },
      [sizes.down('xs')]: {
        minWidth: '50px',
      },
      '&:hover': {
        backgroundColor: commonStyles.colors.tableGrey,
        color: commonStyles.colors.red,
        fontWeight: commonStyles.boldText,
        cursor: 'pointer',
      },
    },
    '& td': {
      padding: '12px',
      textAlign: 'left',
      borderBottom: `1px solid ${commonStyles.colors.tableBorder}`,
      [sizes.down('md')]: {
        minWidth: '70px',
        fontSize: '0.7rem',
      },
    },
    '& a:hover': {
      color: commonStyles.colors.red,
      fontWeight: commonStyles.boldText,
    },
  },
  noUsers: {
    textAlign: 'center',
  },
};

export default styles;
