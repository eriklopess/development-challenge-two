import React from 'react';
import { TableCell } from '@mui/material';
import dayjs from 'dayjs';
import Customer from '../../../interfaces/customer.interface';

interface Props {
  customer: Customer;
}

export default function ReadOnlyRow({ customer }: Props): JSX.Element {
  return (
    <>
      <TableCell component="th" scope="row">
        {customer.name}
      </TableCell>
      <TableCell>{customer.email}</TableCell>
      <TableCell>{dayjs(customer.birthDate).format('DD/MM/YYYY')}</TableCell>
      <TableCell>{customer.address}</TableCell>
    </>

  );
}
