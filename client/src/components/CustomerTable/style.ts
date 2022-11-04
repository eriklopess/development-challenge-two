import { SxProps } from '@mui/material';

const tableContainerStyle: SxProps = {
  display: 'flex',
  width: '95%',
  minHeight: '50vh',
  maxHeight: '60vh',
  m: 'auto',
};

const tableCellHeader: SxProps = {
  color: 'white',
  fontSize: '1rem',
  backgroundColor: '#333333',
};

const tableRowStyle: SxProps = {

  '&:nth-child(even)': { bgcolor: '#f2f1ec' },
};

const tableFooterStyle: SxProps = {
  '@media (max-width: 700px)': {
    '& .MuiTablePagination-root': {
      '& .MuiTablePagination-spacer': {
        display: 'none',
      },
    },
  },
};
export {
  tableContainerStyle,
  tableRowStyle,
  tableCellHeader,
  tableFooterStyle,
};
