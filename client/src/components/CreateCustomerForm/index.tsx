/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LocalizationProvider, DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Customer from '../../interfaces/customer.interface';
import createCustomerBoxStyles from './style';

const createCustomerObject: Customer = {
  name: '',
  email: '',
  address: '',
  birthDate: '',
};

export default function CreateCustomerForm(): JSX.Element {
  const [createCustomerFields, setCreateCustomerFields] = useState<Customer>({
    name: '',
    email: '',
    address: '',
    birthDate: '',
  });

  const handleCreateCustomerSubmit = (): void => {
    setCreateCustomerFields(createCustomerObject);
  };

  const validadeEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateName = (name: string): boolean => {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(name);
  };

  const validateAddress = (address: string): boolean => {
    const re = /^[a-zA-Z0-9 ]{2,30}$/;
    return re.test(address);
  };

  const validateDate = (date: string): boolean => {
    const dateSplit = date.split('-');
    const year = dateSplit[0];
    const month = dateSplit[1];
    const day = dateSplit[2];
    const re = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    if (re.test(date)) {
      if (year >= '1900' && year <= '2021') {
        if (month >= '01' && month <= '12') {
          if (day >= '01' && day <= '31') {
            return true;
          }
        }
      }
    }
    return false;
  };

  const checkAllFields = (): boolean => {
    const {
      name, email, address, birthDate,
    } = createCustomerFields;
    if (
      name !== ''
      && email !== ''
      && address !== ''
      && birthDate !== ''
      && validadeEmail(email)
      && validateName(name)
      && validateAddress(address)
      && validateDate(birthDate)
    ) {
      return true;
    }
    return false;
  };

  const handleChangeDate = (date: Dayjs | null): void => {
    setCreateCustomerFields({
      ...createCustomerFields,
      birthDate: date?.format('YYYY-MM-DD') || '',
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as HTMLInputElement;
    setCreateCustomerFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={createCustomerBoxStyles}
    >
      <TextField
        required
        label="Nome"
        name="name"
        onChange={handleChange}
        value={createCustomerFields.name}
        error={!validateName(createCustomerFields.name)}
        placeholder="ex: Alexandre Duarte"
      />
      <TextField
        required
        label="Email"
        name="email"
        onChange={handleChange}
        value={createCustomerFields.email}
        error={!validadeEmail(createCustomerFields.email)}
        placeholder="ex: alexandreduarte@gmail.com"
      />
      <TextField
        required
        label="Endereço"
        name="address"
        value={createCustomerFields.address}
        onChange={handleChange}
        error={!validateAddress(createCustomerFields.address)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {
          window.innerWidth > 600
            ? (
              <DesktopDatePicker
                label="Data de Nascimento"
                inputFormat="DD/MM/YYYY"
                onChange={handleChangeDate}
                value={createCustomerFields.birthDate}
                renderInput={(params) => <TextField {...params} />}
              />
            )
            : (
              <MobileDatePicker
                label="Data de Nascimento"
                inputFormat="DD/MM/YYYY"
                onChange={handleChangeDate}
                value={createCustomerFields.birthDate}
                renderInput={(params) => <TextField {...params} />}
              />
            )
        }

      </LocalizationProvider>
      <Button
        variant="contained"
        disabled={!checkAllFields()}
        onClick={handleCreateCustomerSubmit}
      >
        Criar
      </Button>
    </Box>
  );
}
