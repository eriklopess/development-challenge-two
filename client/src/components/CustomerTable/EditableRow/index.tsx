/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { TableCell, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import Customer from '../../../interfaces/customer.interface';
import {
  validateAddress, validateEmail, validateName,
} from '../../../utils/validations';

interface Props {
  customer: Customer;
  setEditedCustomer: React.Dispatch<React.SetStateAction<Customer>>;
}

export default function EditableRow({
  customer,
  setEditedCustomer,
}: Props): JSX.Element {
  const [updateCustomerFields, setUpdateCustomerFields] = useState<Customer>({
    id: customer.id,
    name: customer.name,
    email: customer.email,
    address: customer.address,
    birthDate: customer.birthDate,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as HTMLInputElement;
    setUpdateCustomerFields((prev: Customer) => ({ ...prev, [name]: value }));
  };

  const handleChangeDate = (date: Dayjs | null): void => {
    setUpdateCustomerFields({
      ...updateCustomerFields,
      birthDate: date?.format('YYYY-MM-DD') || '',
    });
  };

  useEffect(() => {
    setEditedCustomer(updateCustomerFields);
  }, [updateCustomerFields]);

  return (
    <>
      <TableCell>
        <TextField
          required
          name="name"
          value={updateCustomerFields.name}
          error={updateCustomerFields.name === '' || !validateName(
            updateCustomerFields.name,
          )}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <TextField
          required
          name="email"
          error={updateCustomerFields.email === ''
            || !validateEmail(updateCustomerFields.email)}
          value={updateCustomerFields.email}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            inputFormat="DD/MM/YYYY"
            value={updateCustomerFields.birthDate}
            onChange={handleChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </TableCell>
      <TableCell>
        <TextField
          required
          name="address"
          error={updateCustomerFields.address === ''
            || !validateAddress(updateCustomerFields.address)}
          onChange={handleChange}
          value={updateCustomerFields.address}
        />
      </TableCell>
    </>
  );
}
