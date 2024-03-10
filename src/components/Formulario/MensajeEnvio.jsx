import { Box, Typography } from "@mui/material"

export const MensajeEnvio = () => {
  return (
    <>
        <Box
            sx={{
                width: '100%',
                height: '45vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'bluePrimary.main',                    
                    boxShadow: '-6px 6px 10px 0px rgba(0,0,0,0.40)',                   
                    borderRadius: '40px 10px 40px 10px', 
                    p: 5,                    
                    m: 2,
                    maxWidth: 450
                }}
            >
                <Typography
                    sx={{
                        fontSize: '22px', 
                        fontFamily: 'Parsi', 
                        fontWeight: 700, 
                        color: 'blueTerciary.main',
                        lineHeight: 1.4,
                        textAlign: 'center'
                    }}
                >
                    Hemos recibido la información, te responderemos a la brevedad.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '18px', 
                            fontFamily: 'Parsi', 
                            fontWeight: 700, 
                            color: 'blueTerciary.main',
                            mt: 3
                        }}
                    >
                        Equipo Pronet
                    </Typography>                    
                </Box>
            </Box>
        </Box>
    </>
  )
}
