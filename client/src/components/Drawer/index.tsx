import React from 'react';
import {
  Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import LOGO_IMAGE from '../../assets/logo.png';
import listStyles from './style';

export default function DrawerComponent(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Box>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', m: 5 }}>
          <img src={LOGO_IMAGE} alt="logo" style={{ borderRadius: '50%' }} width="100px" />
        </Box>
        <Divider />
        <List sx={listStyles}>

          <ListItemButton
            onClick={() => navigate('/')}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate('/customers')}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
