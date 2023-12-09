import { Box, Button } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsappLink = () => {
  return (
    <>
        <Box sx={{margin: 1}}>
            <Box>
                <Button variant="contained"><WhatsAppIcon />WhatsApp</Button>
            </Box>
        </Box>
    </>
  )
}

export default WhatsappLink