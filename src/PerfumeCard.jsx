
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import perfumeDesktop from './assets/images/perfume-desktop.jpg';
import perfumeMobile from './assets/images/perfume-mobile.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button} from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function PerfumeCard() {

  const [isMobileVersion, setIsMobileVersion] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileVersion(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const image = isMobileVersion ? perfumeMobile : perfumeDesktop;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMobileVersion ? "column" : "row",
        width: "100%",
        height: "auto",
        maxWidth: 950,
        margin: "0 auto",
        marginTop: 25,
        borderRadius: 5,
        marginBottom: 25,
      }}
    >
      <CardMedia
        sx={{
          width: isMobileVersion ? "100%" : 850,
          height: isMobileVersion ? 400 : 730,
        }}
        image={image}
        alt="Floral Perfume for you and your family"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isMobileVersion ? "center" : "flex-start",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          color="black"
          letterSpacing={6}
          marginRight={isMobileVersion ? 0 : 25}
          fontFamily="arial"
        >
          PERFUME
        </Typography>
        <Typography
          variant="h2"
          color="black"
          component="div"
          fontWeight="bold"
          fontFamily="Fraunces"
          fontSize={70}
          textAlign={isMobileVersion ? "center" : "start"}
        >
          Gabrielle Esssence Eau De Parfum
        </Typography>
        <Typography
          color="black"
          component="div"
          variant="h6"
          fontSize={24}
          textAlign={isMobileVersion ? "center" : "start"}
          width={isMobileVersion ? "100%" : 350}
          height={isMobileVersion ? "auto" : 150}
          fontFamily="font-face-fn"
          marginTop={2}
        >
          A floral, solar, and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </Typography>
        <Typography
          color="#41644A"
          fontFamily="Fraunces"
          fontSize={45}
          textAlign={isMobileVersion ? "center" : "start"}
          fontWeight="bold"
          marginTop={isMobileVersion ? 2 : 50}
          position={isMobileVersion ? "static" : "absolute"}
        >
          $149.99
        </Typography>
        <Typography
          style={{ textDecorationLine: "line-through" }}
          color="lightgray"
          fontSize={25}
          textAlign={isMobileVersion ? "center" : "start"}
          fontWeight="bold"
          marginTop={isMobileVersion ? 2 : 9}
          marginLeft={isMobileVersion ? 0 : "160px"}
        >
          169.99
        </Typography>

        <Button
          sx={{
            backgroundColor: "#41644A",
            width: "250px",
            height: "90px",
            color: "white",
            fontWeight: "bold",
            fontFamily: "arial",
            fontSize: 20,
            borderRadius: 4,
            marginTop: 4,
          }}
        >
          <ShoppingCartIcon />
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
