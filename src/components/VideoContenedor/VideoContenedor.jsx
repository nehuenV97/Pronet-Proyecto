import { Box, Typography } from "@mui/material"
import WhatsappLink from "../WhatsappLink/WhatsappLink"

const VideoContenedor = () => {
  return (
    <>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '1px 1px 2px 1px gray', borderRadius: '0px 0px 5px 5px', backgroundColor: '#ebebeb', width: 500, height: 300}}>
                <Typography>Video sobre colocacion</Typography>
            </Box>
            <WhatsappLink />
        </Box>
    </>
  )
}

export default VideoContenedor