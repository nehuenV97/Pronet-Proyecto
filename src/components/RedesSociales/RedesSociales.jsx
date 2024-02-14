import { Box } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ButtonRedSocial } from "./ButtonRedSocial";

export const RedesSociales = ({ backColor, color, hoverBackColor }) => {
  return (
    <Box 
        sx={{ 
            display: 'flex',
            flexDirection: 'row',
            gap: 5
        }}
    >    
        <ButtonRedSocial
            backColor={ backColor } 
            color={ color } 
            hoverBackColor={ hoverBackColor }
            to="https://wa.me/543513115161"
        >
            <WhatsAppIcon sx={{ fontSize: 50 }}/>
        </ButtonRedSocial>

        <ButtonRedSocial
            backColor={ backColor } 
            color={ color } 
            hoverBackColor={ hoverBackColor }
            to="https://www.facebook.com/RedesPronet"
        >
            <FacebookIcon sx={{ fontSize: 50 }}/>
        </ButtonRedSocial>

        <ButtonRedSocial
            backColor={ backColor } 
            color={ color } 
            hoverBackColor={ hoverBackColor }
            to="https://www.instagram.com/pronetseguridad/"
        >
            <InstagramIcon sx={{ fontSize: 50 }}/>
        </ButtonRedSocial>        

    </Box>
  )
}
