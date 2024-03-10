import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export const ItemCarrusel = ({imageUrl, alt}) => {
  return (
    <Card className='animate__animated animate__backInRight animate__fast' 
      sx={{ width: '11.8rem', height: '20rem' }}
    >
      <CardMedia        
        component={'img'}
        alt={ alt }
        src={ imageUrl }
        height='100%'
        width='100%'     
        sx={{ objectFit: 'fill'}} 
      />
    </Card>
  );
}
