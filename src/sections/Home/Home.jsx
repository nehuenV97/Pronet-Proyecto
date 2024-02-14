import { Box, Typography } from "@mui/material"
import { ButtonCotizar } from "../../components/ButtonCotizar/ButtonCotizar"
import { WhatsappButton } from "../../components/Whatsapp/WhatsappButton"

import portadaPronet from '../../assets/portadaPronet.svg';
import { SX_BOX_PORTADA, SX_PARRAFO, SX_SUBTITULO, SX_TITULO } from "./sxHome";

export const Home = () => {
  return (
    <>
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', height: '75vh', p: 1, flexWrap: 'wrap' }}>
            <Box sx={{ mt: 13, ml: { xs: 3, sm: 6 } }}>
                <Typography variant="h1" 
                    sx={ SX_TITULO }
                >
                    PRONET
                </Typography>

                <Typography variant="h3"
                    sx={ SX_SUBTITULO }
                >
                    Redes de seguridad
                </Typography>

                <Typography variant="h4"
                    sx={ SX_PARRAFO }
                >
                    La combinación perfecta entre seguridad y estética
                </Typography>                
                
                <ButtonCotizar
                    backColor={'secondary'}
                    color={'dark.main'}
                    hoverBackColor={'terciary.main'}
                    hoverColor={'primary.main'}
                />

                <Box
                    sx={{ width: '100%', display: 'flex', justifyContent: 'end', mt: 5}}
                >
                    <WhatsappButton />    
                </Box>  
                          
            </Box>
            <Box>
                <Box 
                    sx={ SX_BOX_PORTADA }
                >
                    <Box 
                        component='img' 
                        src={ portadaPronet } 
                        alt='Portada Pronet' 
                        sx={{
                            width: 700
                        }}
                    />
                   
                </Box>
            </Box>
        </Box>
    </>
  )
}
