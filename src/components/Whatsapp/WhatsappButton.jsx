import { IconButton } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";

export const WhatsappButton = () => {
  return (
    <>
        <IconButton 
          size='large'
          sx={{
            color: 'white',
            backgroundColor: '#03C305',
            ':hover': { backgroundColor: '#03C305', opacity: 0.75 },
            position: 'fixed',
            right: { xs: 20, sm: 50 },
            bottom: { xs: 110, sm: 40 },
            zIndex: 10            
          }}
          component={Link}
          to="https://wa.me/543513115161"
          target="_blank"
        >
            <WhatsAppIcon sx={{ fontSize: { xs: 35, sm: 50 } }} />
        </IconButton>
    </>
  )
}
