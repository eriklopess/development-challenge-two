const createCustomerBoxStyles = {
  display: 'flex',
  width: '95%',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 'auto',
  '& .MuiTextField-root, & .MuiButton-root': {
    width: '30ch',
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    '& .MuiTextField-root, & .MuiButton-root': {
      width: '100%',
      m: 1,
    },
  },
};

export default createCustomerBoxStyles;
