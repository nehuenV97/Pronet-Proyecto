import { Box, Grid } from "@mui/material"
import { ContainerTexto } from "../../components/ContainerTexto/ContainerTexto"
import { VideoInstalacion } from "./VideoInstalacion"
import { SX_GRID_ITEM } from "./sxQuienes"


export const Quienes = () => {
  return (
    <>
      <Grid container id='quienes'
        sx={{           
          p: 1, 
          pt: 8
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
              titulo={'¿Por que elegirnos?'}
              subtitulo={'¿Quiénes somos?'}                  
            >
              Desde el año 2010 venimos incorporando mejoras a la instalación de redes de seguridad. El proceso está orientado a que el cliente se sienta en buenas manos desde la cotización hasta eñ trabajo terminado.
            </ContainerTexto>          
          </Box> 
        </Grid>
      </Grid>

      <VideoInstalacion />
    </>    
  )
}
