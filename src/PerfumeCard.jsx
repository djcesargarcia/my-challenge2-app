import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import perfumeDesktop from './assets/images/perfume-desktop.jpg'

export default function MediaCard() {
  return (
    <Card sx={{ display: 'flex',width: 900, height:625, margin:'0 auto', marginTop:25, borderRadius:5}}>
      <CardMedia
        sx={{ width:900, height:625}}
        image={perfumeDesktop}
        alt="Floral Perfume for you and your family"
      />
      <CardContent>
        <Typography gutterBottom variant='h6' color="black" letterSpacing={6} marginRight={45} fontFamily={'arial'} >
          PERFUME
        </Typography>
        <Typography variant="h2" color="black" component='div' fontWeight={'bold'} fontFamily={'Fraunces'} fontSize={70} textAlign={'start'}>
          Gabrielle Esssence Eau De Parfum
        </Typography>
        <Typography color="black" component={'div'} variant='h6' fontSize={24} textAlign={'start'}  width={350} height={150} fontFamily={'font-face-fn'} marginTop={2} >
          A floral, solar, and voluptous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
        </Typography>
        <Typography color="#41644A" fontFamily={'Fraunces'} fontSize={45} textAlign={'start'} fontWeight={'bold'} marginTop={4} position={'absolute'}>
          $149.99 
        </Typography>
        <Typography style={{textDecorationLine:'line-through'}} color="lightgray" fontSize={35} textAlign={'start'} fontWeight={'bold'} marginTop={5} marginLeft={'165px'} >
          169.99
        </Typography>
      </CardContent>
     
    </Card>
  );
}
