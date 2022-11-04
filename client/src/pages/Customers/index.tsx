/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CustomerTable from '../../components/CustomerTable';
import CreateCustomerForm from '../../components/CreateCustomerForm';
import { boxContainerStyle, boxCreateCustomerStyle } from './style';

export default function Customers(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleCreateCustomerOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Box sx={boxContainerStyle}>
      <Box sx={{ pl: 2, display: 'flex' }}>
        <DialogTitle>Clientes</DialogTitle>
        <IconButton onClick={handleCreateCustomerOpen}>
          { open ? <CancelIcon /> : <AddCircleIcon />}
        </IconButton>
      </Box>
      <Box
        component="div"
        sx={boxCreateCustomerStyle}
      >
        {
          open && <CreateCustomerForm />
        }
      </Box>
      <CustomerTable />
    </Box>
  );
}
