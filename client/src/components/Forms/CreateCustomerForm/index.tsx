/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Customer from '../../../interfaces/customer.interface';
import createCustomer from '../../../services/api/createCustomer';
import makeId from '../../../utils/makeId';
import checkAllFields from '../../../utils/validations';
import SuccessAlert from '../../Alerts/SuccessAlert';
import ErrorAlert from '../../Alerts/ErrorAlert';
import createCustomerBoxStyles from './style';

const createCustomerObject: Customer = {
  id: makeId(24),
  name: '',
  email: '',
  address: '',
  birthDate: null,
};

export default function CreateCustomerForm(): JSX.Element {
  const [createCustomerFields, setCreateCustomerFields] = useState<Customer>({
    id: makeId(24),
    name: '',
    email: '',
    address: '',
    birthDate: null,
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleCreateCustomerSubmit = (): void => {
    setCreateCustomerFields(createCustomerObject);
    createCustomer(createCustomerFields).then((response) => {
      if (response.status === 201) {
        setShowSuccessMessage(true);
        setTimeout(
          () => {
            setShowSuccessMessage(false);
          },
          3000,
        );
      }
    }).catch(() => {
      setShowErrorMessage(true);
      setTimeout(
        () => {
          setShowErrorMessage(false);
        },
        3000,
      );
    });
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
    <>
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
          placeholder="ex: Alexandre Duarte"
          helperText="Nome deve conter apenas letras e espaços"
        />
        <TextField
          required
          label="Email"
          name="email"
          onChange={handleChange}
          value={createCustomerFields.email}
          placeholder="ex: alexandreduarte@gmail.com"
          helperText="Email deve ser válido"
        />
        <TextField
          required
          label="Endereço"
          name="address"
          helperText="Endereço deve conter apenas letras, números e espaços"
          value={createCustomerFields.address}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Data de Nascimento"
            inputFormat="DD/MM/YYYY"
            onChange={handleChangeDate}
            value={createCustomerFields.birthDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          disabled={!checkAllFields(createCustomerFields)}
          onClick={handleCreateCustomerSubmit}
        >
          Criar
        </Button>
      </Box>
      {
        showSuccessMessage && <SuccessAlert text="O cliente foi criado com sucesso." />
      }
      {
        showErrorMessage && <ErrorAlert text="Ocorreu um erro ao criar o cliente." />
      }
    </>
  );
}
