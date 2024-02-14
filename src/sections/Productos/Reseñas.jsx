import { Box, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import { ContainerTitulo } from "../../components/ContainerTitulo/ContainerTitulo";

export const Reseñas = () => {
  return (
    <>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          m: '20px 0 0 0',
          p: '20px 16px 40px',
          bgcolor: 'rgb(55, 78, 114, 0.7)'        
        }}
      > 
        <Box>
          <ContainerTitulo 
            colorTitulo={'primary.main'}
            titulo={'Nuestros Clientes'}
            subtitulo={'Reseñas'}
          />      
          <Box 
            sx={{
              maxWidth: 600,
              padding: 2,           
              boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
              bgcolor: 'primary.main',
              borderRadius: '30px 5px 30px 5px',
              display: 'flex',
              flexDirection: 'column',            
              alignItems: 'center',                 
            }}
          >
            <Typography
              sx={{
                padding: '5px 5px 0 5px',
                fontFamily: 'Parsi',
                fontWeight: 400,
                fontSize: 18,
                color: 'blueTerciary.main',
                textAlign: 'center'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem quae nobis dignissimos delectus officia vitae temporibus perferendis consectetur, explicabo velit quasi, esse quos maiores. Officia temporibus tempore perferendis asperiores!
            </Typography>
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 1,
                color: 'goldenrod'
              }}
            >
              <Typography>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Typography>

              <Typography 
                sx={{
                  fontFamily: 'Parsi',
                  fontWeight: 700,
                  fontSize: 25,
                  color: 'blueTerciary.main'
                }}
              >
                Agustina Vidal
              </Typography>
            </Box>
          </Box>        
        </Box>   
      </Box>      
    </>
  )
}
