import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemGaleria = () => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://lh3.googleusercontent.com/p/AF1QipNpXtD5LrtZyQcmFSKoYybMNf7wKFtoIhZiYXCr=w1080-h608-p-no-v0"
        title="redes seguridad"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Redes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio nobis ex reprehenderit aut officiis autem.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default ItemGaleria;