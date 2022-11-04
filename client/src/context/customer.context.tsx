import React, { useState, useMemo } from 'react';
import Customer from '../interfaces/customer.interface';

export const CustomerContext = React.createContext([]);

type ProviderProps = {
  children: React.ReactNode;
};

export default function CustomerProvider({ children }: ProviderProps): JSX.Element {
  const [customers, setCustomers] = useState<Customer[] | []>([{
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St asdds saddasadsadss',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {

    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  },
  {
    name: 'John Doe',
    email: 'asd@asd.com',
    birthDate: '1990-01-01',
    address: '123 Main St',
  }]);
  const customersProviderValue: any = useMemo(() => ({
    customers,
    setCustomers,
  }), [customers, setCustomers]);
  return (
    <CustomerContext.Provider value={customersProviderValue}>
      {children}
    </CustomerContext.Provider>
  );
}
