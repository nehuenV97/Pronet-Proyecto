// import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SeccionBalcon from '../../pages/Sections/SeccionBalcon';
import SeccionVentana from '../../pages/Sections/SeccionVentana';
import SeccionEscalera from '../../pages/Sections/SeccionEscalera';

const productos = [
  {
    id: 'balcon',
    nombre: 'Balcones',
    path: '/categoria/Balcones'
  },
  {
    id: 'ventana',
    nombre: 'Ventanas',
    path: '/categoria/Ventanas'
  },
  {
    id: 'escalera',
    nombre: 'Escaleras',
    path: '/categoria/Escaleras'
  }
]

const TabsMenu = () => {
  const [selected, setSelected] = useState('balcon');

  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={selected} onChange={handleChange} centered>
          {
            productos.map((item, index) => (
              <Tab key={index + item.id} label={item.nombre} value={item.id} />
            ))
          }        
        </Tabs>        
      </Box>
      {
        selected === 'balcon' ?
        <SeccionBalcon /> : null
      }
      {
        selected === 'ventana' ?
        <SeccionVentana /> : null
      }
      {
        selected === 'escalera' ?
        <SeccionEscalera /> : null
      }      
    </>
  );
}

export default TabsMenu;