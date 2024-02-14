import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { SX_ITEM_BUTTON, SX_ITEM_DESCRIPCION, SX_ITEM_PRODUCTO, SX_ITEM_TITULO } from './sxItemProducto';


export const ItemProducto = ({ titulo, descripcion, imageUrl, categoria }) => {
  return (
    <Card
      sx={ SX_ITEM_PRODUCTO }
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 142 }}
          image={ imageUrl }
          title={ titulo }
        />
        <CardContent>
          <Typography
            gutterBottom 
            variant="h5"
            sx={ SX_ITEM_TITULO } 
          >
            { titulo }
          </Typography>

          <Typography 
            variant="body2"            
            sx={ SX_ITEM_DESCRIPCION }
          >
            { descripcion }
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions 
        sx={{ 
          display: 'flex', 
          justifyContent: 'end',          
        }}
      >
        <Button           
          color='blueTerciary'
          component={Link}
          to={`/producto/${ categoria }`}      
          sx={ SX_ITEM_BUTTON }
        >
          Ver más<ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
