import { SxProps } from '@mui/material';

const boxContainerStyle: SxProps = {
  p: 1,
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'space-evenly',
  minHeight: '100vh',
  ml: '250px',
};

const boxCreateCustomerStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100px',
};

export {
  boxContainerStyle,
  boxCreateCustomerStyle,
};
