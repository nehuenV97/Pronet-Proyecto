import { Box, Typography } from "@mui/material"
import { SX_CONTAINER, SX_CONTAINER_PARRAFO, SX_CONTAINER_SUBTITULO, SX_CONTAINER_TITULO } from "./sxContainerTexto"

export const ContainerTexto = ( { titulo, subtitulo, children } ) => {
  return (
    <Box 
        sx={ SX_CONTAINER }
    >
        <Typography variant="h4" 
            sx={ SX_CONTAINER_TITULO }
        >
            { titulo }
        </Typography>
        
        <Typography variant="h3" 
            sx={ SX_CONTAINER_SUBTITULO }
        >
            { subtitulo }
        </Typography>
        
        <Box 
            sx={ SX_CONTAINER_PARRAFO }
        >
            { children }
        </Box>
    </Box>
  )
}
