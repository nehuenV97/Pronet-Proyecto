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
            backgroundColor: 'blueTerciary.main',
            ':hover': { backgroundColor: 'blueSecondary.main', opacity: 0.9 },            
          }}
          component={Link}
          to="https://wa.me/543513115161"
          target="_blank"
        >
            <WhatsAppIcon sx={{ fontSize: 50 }} />
        </IconButton>
    </>
  )
}
