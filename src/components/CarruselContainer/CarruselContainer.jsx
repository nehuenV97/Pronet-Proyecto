import { Box } from "@mui/material"
import { ContainerTitulo } from "../ContainerTitulo/ContainerTitulo";
import { Carrusel } from "../Carrusel/Carrusel";
import { dataCarrusel } from "../../../dataCarrusel";
import { SX_CARRUSEL_CONTAINER } from "./sxCarruselContainer";

export const CarruselContainer = () => {
  return (
    <>
      <Box 
        sx={ SX_CARRUSEL_CONTAINER }      
      >
        <Box>
          <ContainerTitulo 
            colorTitulo={'blueTerciary.main'}
            titulo={'Nuestros Trabajos Previos'}
            subtitulo={'Galería'}
          />
          <Carrusel dataCarrusel={ dataCarrusel } />
        </Box>
      </Box>
    </>
  )
}
