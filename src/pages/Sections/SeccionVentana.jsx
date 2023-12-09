import { Box, Typography } from "@mui/material"
import VideoContenedor from "../../components/VideoContenedor/VideoContenedor";

const SeccionVentana = () => {
  return (
    <>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2, gap: 3}}>
            <Typography variant="h5">Ventanas</Typography>
            <VideoContenedor />
        </Box>
    </>
  )
}

export default SeccionVentana;