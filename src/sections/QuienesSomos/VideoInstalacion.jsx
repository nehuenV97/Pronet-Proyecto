import { Box, Grid } from "@mui/material"
import { ContainerTexto } from "../../components/ContainerTexto/ContainerTexto"
import { SX_GRID_ITEM } from "./sxQuienes"

export const VideoInstalacion = () => {
  return (    
    <>
      <Grid container id='quienes'
        sx={{           
          p: 1, 
          pt: 5
        }}
      >
        <Grid item xs={ 12 } sm={ 6 }
          sx={ SX_GRID_ITEM }
        >
          <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <iframe 
              width="100%" 
              height="350" 
              src="https://www.youtube.com/embed/q-pQBTnCgUA?si=BNtM9YONuore3WtU" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen></iframe>
          </Box>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 }
          sx={ SX_GRID_ITEM }
        > 
          <Box sx={{ width: '85%'}}>
            <ContainerTexto 
              titulo={'Para tomar medidas'}
              subtitulo={'Procedimiento'}                  
            >
              Tenemos las mejores redes del mercado y ofrecemos instalaciones en tiempo record. Usamos una red de rombo de 3x3 cm con las mejores terminaciones
            </ContainerTexto>          
          </Box> 
        </Grid>
      </Grid>
    </>    
  )
}