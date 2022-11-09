import { SxProps } from '@mui/material';

const tableContainerStyle: SxProps = {
  display: 'flex',
  maxHeight: '70vh',
  m: 'auto',
};

const tableCellHeader: SxProps = {
  color: 'white',
  fontSize: '1rem',
  backgroundColor: '#333333',
};

const tableRowStyle: SxProps = {
  width: 'calc(100% - 100px)',
  '&:nth-child(even)': { bgcolor: '#f2f1ec' },
};

export {
  tableContainerStyle,
  tableRowStyle,
  tableCellHeader,
};
