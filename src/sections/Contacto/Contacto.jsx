import { Box, Grid } from "@mui/material"
import { ContainerTexto } from "../../components/ContainerTexto/ContainerTexto"
// import { Formulario } from "../../components/Formulario/Formulario";
import { RedesSociales } from "../../components/RedesSociales/RedesSociales"
import { SX_GRID_ITEM_CONTACTO } from "./sxContacto"
import { FormInfo } from "../../components/Formulario/FormInfo"

import './stylesContacto.css';

export const Contacto = () => {
  return (   
    <>
      <Grid container id='contacto'
        sx={{           
          p: 1, 
          pt: 8
        }}
      >
        <Grid item xs={ 12 } sm={ 6 }
          sx={ SX_GRID_ITEM_CONTACTO }
        >
          <Box sx={{ width: '85%'}}>
            <ContainerTexto 
              titulo={'Nos encantaria cuidar tu hogar'}
              subtitulo={'Nos distinguimos en:'}                  
            >
              <ul>
                <li>Asesoramiento para lograr la mejor solución para el cliente</li>
                <li>Nuestra trayectoria y velocidad de respuesta</li>
                <li>Un técnico especializado supervisa</li>
              </ul>
            </ContainerTexto>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 4,
                mb: 4
              }}
            >
              <RedesSociales 
                backColor={'blueSecondary'}
                color={'white'}
                hoverBackColor={'blueTerciary.main'}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={ 12 } sm={ 6 }
          sx={ SX_GRID_ITEM_CONTACTO }
        > 
          <Box sx={{ width: '90%', mt: 3, mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* <Formulario />           */}
            <FormInfo />
          </Box> 
        </Grid>
      </Grid>
    </>  
  )
}
