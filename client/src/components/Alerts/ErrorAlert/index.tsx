import React from 'react';
import { Alert } from '@mui/material';
import alertStyle from '../style';

interface Props {
  text: string;
}

export default function ErrorAlert({ text }: Props): JSX.Element {
  return (
    <Alert
      sx={{
        ...alertStyle,
        bgcolor: '#ffcccc',
      }}
      severity="error"
    >
      { text }
    </Alert>
  );
}
