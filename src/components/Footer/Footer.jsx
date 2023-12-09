import { Box, Button } from "@mui/material"

const FooterApp = () => {
    return (
        <Box sx={{height: '7.5%', width: '100%', position: 'relative', bottom: 0, backgroundColor: '#1976d2', color: '#fff'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', padding: 2, gap: 5}}>
                <Button color="inherit" variant="outlined">Instagram</Button>
                <Button color="inherit" variant="outlined">Facebook</Button>
                <Button color="inherit" variant="outlined">Youtube</Button>                
            </Box>
        </Box>
    )
}

export default FooterApp;