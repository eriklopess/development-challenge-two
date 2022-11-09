import React, { useState, useMemo } from 'react';
import Customer from '../interfaces/customer.interface';

export const CustomerContext = React.createContext([]);

type ProviderProps = {
  children: React.ReactNode;
};

export default function CustomerProvider({ children }: ProviderProps): JSX.Element {
  const [customers, setCustomers] = useState<Customer[] | []>([]);
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
