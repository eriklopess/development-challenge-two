import { SxProps } from '@mui/material';

const boxContainerStyle: SxProps = {
  p: 1,
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'space-evenly',
  minHeight: '100vh',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    '& .MuiToolbar-root': {
      overflow: 'auto',
    },

  },
};

const boxCreateCustomerStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100px',
};

export {
  boxContainerStyle,
  boxCreateCustomerStyle,
};
