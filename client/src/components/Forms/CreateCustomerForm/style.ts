import { SxProps } from '@mui/material';

const createCustomerBoxStyles: SxProps = {
  display: 'flex',
  width: '100%',
  height: 'calc(100vh - 85px)',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  margin: 'auto',
  '& .MuiTextField-root, & .MuiButton-root': {
    width: '50%',
    margin: '10px',
  },
};

export default createCustomerBoxStyles;
