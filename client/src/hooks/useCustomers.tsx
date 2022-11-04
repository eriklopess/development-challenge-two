import React, { useContext } from 'react';
import { CustomerContext } from '../context/customer.context';
import Customer from '../interfaces/customer.interface';

export default function useCustomers(): [Customer[] | [],
  React.Dispatch<React.SetStateAction<[] | Customer[]>>] {
  const context = useContext(CustomerContext);
  const { customers, setCustomers } = context as any;
  return [customers, setCustomers];
}
