import { Box, Typography } from "@mui/material"
import VideoContenedor from "../../components/VideoContenedor/VideoContenedor";

const SeccionEscalera = () => {
  return (
    <>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 2, gap: 3}}>
            <Typography variant="h5">Escaleras</Typography>
            <VideoContenedor />
        </Box>
    </>
  )
}

export default SeccionEscalera;