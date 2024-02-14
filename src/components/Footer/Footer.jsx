import { Box, Grid, Typography } from "@mui/material"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import logoPronet from '../../assets/pronetLogo.svg';
import mapaPronet  from '../../assets/mapaPronet.svg';
import { RedesSociales } from "../RedesSociales/RedesSociales";
import { SX_BOX_DIRECCION, SX_BOX_REDES, SX_BOX_TELEFONO, SX_GRID_CONTAINER_FOOTER, SX_GRID_ITEM_1_FOOTER, SX_GRID_ITEM_2_FOOTER, SX_MAPA_FOOTER, SX_TEXTO_DIRECCION, SX_TEXTO_TELEFONO } from "./sxFooter";


export const FooterApp = () => {
    return (        
        <>
            <Grid container id='quienes'
                sx={ SX_GRID_CONTAINER_FOOTER }
            >
                <Grid item xs={ 12 } sm={ 6 }
                    sx={ SX_GRID_ITEM_1_FOOTER }
                >
                    <Box >
                        <Box component='img' src={logoPronet} alt='Logo Pronet'
                            sx={{ height: { xs: 80, sm: 130 } }}
                        />                    
                        <Box 
                            sx={ SX_BOX_REDES }
                        >
                            <RedesSociales 
                                backColor={'blueTerciary'}
                                color={'primary.main'}
                                hoverBackColor={'blueSecondary.main'}
                            />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }
                    sx={ SX_GRID_ITEM_2_FOOTER }
                > 
                    <Box sx={{ width: '95%', mb: 4}}>
                        <Box component='img' src={mapaPronet} alt='Mapa Pronet'
                            sx={ SX_MAPA_FOOTER }
                        />
                    </Box>

                    <Box sx={{ width: '20rem' }}>
                        <Box
                            sx={ SX_BOX_DIRECCION }
                        >
                            <Typography>
                                <RoomOutlinedIcon color="secondary" sx={{ fontSize: 30 }} />
                            </Typography>

                            <Typography
                                sx={ SX_TEXTO_DIRECCION }
                            >
                                San Antonio 2300 X5016, Córdoba - Argentina
                            </Typography>
                        </Box>
                        
                        <Box
                            sx={ SX_BOX_TELEFONO }
                        >
                            <Typography>
                                <LocalPhoneIcon color="secondary" sx={{ fontSize: 30 }} />
                            </Typography>
                            <Typography
                                sx={ SX_TEXTO_TELEFONO }
                            >
                                0351 311-5161
                            </Typography>
                        </Box>       
                    </Box> 
                </Grid>
            </Grid>
        </>
    )
}
