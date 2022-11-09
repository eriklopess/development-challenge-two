import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../assets/logo.png';
import boxContainerStyle from './style';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={boxContainerStyle}
      component="div"
    >
      <Button
        sx={{
          borderRadius: '50%',
        }}
        onClick={() => navigate('/customers')}
      >
        <img
          src={LOGO}
          style={{
            borderRadius: '50%',
          }}
          alt=""
        />
      </Button>
      <span>
        Clique na imagem para ir para lista de clientes.
      </span>
    </Box>
  );
}
