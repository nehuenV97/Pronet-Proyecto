import { Box, Typography } from "@mui/material"

export const ContainerTitulo = ({ titulo, subtitulo, colorTitulo }) => {
  return (
    <Box 
        sx={{                                 
            width: '100%',                         
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            pb: 2
        }}
    >
        <Typography variant="h4" 
            sx={{ fontSize: '40px', fontFamily: 'Pickle-Pushing', color: colorTitulo, lineHeight: 1}}
        >
            { titulo }
        </Typography>
        
        <Typography variant="h3" 
            sx={{ fontSize: '30px', fontFamily: 'Parsi', fontWeight: 700, color: 'secondary.main'}}
        >
            { subtitulo }
        </Typography>       
       
    </Box>
  )
}
