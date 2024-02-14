import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import GroupIcon from '@mui/icons-material/Group';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { HashLink } from "react-router-hash-link";

const botonDrawer = [
    { titulo: 'Inicio', path: '/#', icono: <HomeOutlinedIcon/> },
    { titulo: 'Producto', path: '/#producto', icono: <AppsIcon/> },
    { titulo: '¿Quienes Somos?', path: '/#quienes', icono: <GroupIcon /> },
    { titulo: 'Contáctenos', path: '/#contacto', icono: <LocalPhoneIcon /> }
  ]

export const NavListDrawer = () => {
  return (
    <Box
        sx={{ bgcolor: 'primary.main' }}
    >
        <List>
            {
                botonDrawer.map( item => (
                    <ListItemButton                      
                        key={ item.titulo }                        
                        component={ HashLink }
                        smooth
                        to={ item.path }
                    >
                        <ListItemIcon 
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    color: 'blueTerciary.main'
                                }
                            }}
                        >
                            { item.icono }
                        </ListItemIcon>
                        <ListItemText
                            sx={{
                                '& .MuiListItemText-primary': {
                                    fontFamily: 'Parsi',
                                    fontWeight: 700,
                                    fontSize: 18,
                                    color: 'blueTerciary.main'
                                }
                            }}
                        >
                            {item.titulo}
                        </ListItemText>
                    </ListItemButton>
                ))
            }            
        </List>
    </Box>
  )
}
