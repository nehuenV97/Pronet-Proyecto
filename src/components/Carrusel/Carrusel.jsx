import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { ItemCarrusel } from "./ItemCarrusel"
import './stylesCarrusel.css';

export const Carrusel = ( { dataCarrusel } ) => {
  
  return (
    <>
      <Box className='swiper-box'>
        <div className="nav-btn custom-prev-button">
          <ArrowBackIcon />
        </div>
        <swiper-container          
          mousewheel-invert="true"          
          navigation="true"
          loop="true"
          className='mySwiper'          
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          breakpoints={
            JSON.stringify({
                
                640:{
                    slidesPerView: 1,                    
                },
    
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
    
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 5,
                }
            })
          }
        >
          {
            dataCarrusel?.map( item => (
              <swiper-slide key={ item.id }>
                {/* <img src={ item.imageURL } alt={ item.alt } /> */}
                <ItemCarrusel                   
                  imageUrl={ item.imageURL }
                  alt={ item.alt }
                />
              </swiper-slide>
            ))
          }
        </swiper-container>       

        <div className="nav-btn custom-next-button">
          <ArrowForwardIcon />          
        </div>      
      </Box>     
    </>
  );
};
