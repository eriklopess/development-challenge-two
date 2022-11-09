import React from 'react';
import { Alert } from '@mui/material';
import alertStyle from '../style';

interface Props {
  text: string;
}

export default function SuccessAlert({ text }: Props): JSX.Element {
  return (
    <Alert
      sx={{
        ...alertStyle,
        bgcolor: '#d9ffcc',
      }}
      severity="success"
    >
      { text }
    </Alert>
  );
}
