import { useState } from "react";
import { Box } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { ItemCarrusel } from "./ItemCarrusel"
import { ButtonCarrusel } from "./ButtonCarrusel";
import { SX_CARRUSEL, SX_CONTAINER_ITEM_CARRUSEL } from "./sxCarrusel";

export const Carrusel = ( { dataCarrusel }) => { 

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; // Número de imágenes a mostrar a la vez

  const goToPrevSlide = () => {
    // if ( currentIndex <= 0 ) return
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? dataCarrusel.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const goToNextSlide = () => {
    // if ( (currentIndex + itemsPerPage) > dataCarrusel.length ) return;
    setCurrentIndex(prevIndex =>
      prevIndex === dataCarrusel.length - itemsPerPage ? 0 : prevIndex + itemsPerPage
    );
  };

  const visibleImages = dataCarrusel.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <>
      <Box sx={ SX_CARRUSEL }>
        <ButtonCarrusel onClick={ goToPrevSlide }>
            <ArrowBackIcon sx={{ fontSize: 25 }} />
        </ButtonCarrusel>
        
        {/* SOLUCIONAR  */}
        <Box
          sx={{...SX_CONTAINER_ITEM_CARRUSEL, display: 'none' }}
        >
          {
            dataCarrusel?.map( item => (
              <ItemCarrusel 
                key={ item.id } 
                imageUrl={ item.imageURL }
                alt={ item.alt }
              />
            ))
          }
        </Box>

        <Box
          sx={ SX_CONTAINER_ITEM_CARRUSEL }
        >
          {
            visibleImages?.map( item => (
              <ItemCarrusel 
                key={ item.id } 
                imageUrl={ item.imageURL }
                alt={ item.alt }
              />
            ))
          }
        </Box>
        
        <ButtonCarrusel onClick={ goToNextSlide }>
          <ArrowForwardIcon sx={{ fontSize: 25 }} />
        </ButtonCarrusel>
                        
      </Box>
    </>
  )
}

