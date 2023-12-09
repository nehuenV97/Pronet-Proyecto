import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Pronet: Redes de seguridad
          </Typography>          
          <Button color="inherit">¿Quienes somos?</Button>
          <Button color="inherit">Galería</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;