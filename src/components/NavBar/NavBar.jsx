import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

import logoPronet from '../../assets/logoPronet-2.svg';
import { ButtonNavbar } from './ButtonNavbar';
import { NavListDrawer } from './NavListDrawer';
import { SX_BOX_NAVLINKS, SX_ICON_BUTTON, SX_NAVLINK_CONTAINED, SX_PRONET_SVG } from './sxNavbar';

const botonNavbar = [
  { titulo: 'Inicio', path: '/#'},
  { titulo: 'Producto', path: '/#producto'},
  { titulo: 'Quienes Somos', path: '/#quienes'}
]

export const NavBar = () => {

  const [ open, setOpen ] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, paddingBottom: { xs: '40px', sm: '105px' } }}>
        <AppBar position="fixed">
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'blueTerciary.main'}}>          
            
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              <IconButton
                onClick={ () => setOpen(true) }                
                color="primary"                
                sx={ SX_ICON_BUTTON }
              >
                <MenuIcon />
              </IconButton>             

              <Box 
                component='img' 
                src={logoPronet} 
                alt='Logo Pronet' 
                sx={ SX_PRONET_SVG }
              />

            </Box>              
              
            <Box sx={ SX_BOX_NAVLINKS }>
              {
                botonNavbar.map( item => (
                  <ButtonNavbar 
                    key={ item.titulo }
                    to={ item.path }                      
                  >
                    {item.titulo}
                  </ButtonNavbar>
                ))
              }

              <Button
                variant='contained'
                color='secondary' 
                component={ HashLink }
                smooth
                to='/#contacto'
                sx={ SX_NAVLINK_CONTAINED }  
              >
                Contáctenos
              </Button>
            </Box>                      
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        sx={{ display: { xs: 'flex', sm: 'none' }}}       
        open={open}
        anchor='top'
        onClose={ () => setOpen(false) }
      >
        <NavListDrawer />
      </Drawer>
    </>
  );
}
