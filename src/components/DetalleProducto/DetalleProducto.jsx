import { Link } from "react-router-dom"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SX_BOX_IMAGENES, SX_CARD, SX_CARD_DESCRIPCION, SX_CARD_TITULO, SX_IMAGENES } from "./sxDetalleProducto";

export const DetalleProducto = ({ imageUrl, titulo, descripcion, categoria }) => {
  return (
    <Card className="animate__animated animate__backInRight"
        sx={ SX_CARD }
    >
        <CardMedia
            component="img"
            alt={ categoria }
            height="340"
            image={ imageUrl }
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div"
                sx={ SX_CARD_TITULO }
            >
            { titulo }
            </Typography>

            <Typography variant="body2" color="text.secondary"
            sx={ SX_CARD_DESCRIPCION } 
            >
            { descripcion }
            </Typography>
            
        </CardContent>
        
        <Box
            sx={ SX_BOX_IMAGENES }
        >
            <Box component='img' src={ imageUrl } alt={ categoria } 
                sx={ SX_IMAGENES }
            />
            <Box component='img' src={ imageUrl } alt={ categoria } 
                sx={ SX_IMAGENES }
            />
            <Box component='img' src={ imageUrl } alt={ categoria } 
                sx={ SX_IMAGENES }
            />
        </Box>

        <CardActions
            sx={{ 
                display: 'flex', 
                justifyContent: 'end',                                
            }}
        >
            <Button
                size="large"        
                color='blueSecondary'
                component={Link}
                to='/'
                sx={{ p: 1 }}            
            >
                <ArrowBackIcon sx={{ fontSize: 50 }} />
            </Button>
        </CardActions>
    </Card>    
  )
}
