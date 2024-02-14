import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

export const ButtonCotizar = ({ backColor, color, hoverBackColor, hoverColor }) => {
  return (
    <Button
      color={ backColor }
      variant="contained"
      sx={{
          fontFamily: 'Parsi',
          fontWeight: 400,
          fontSize: 18,
          textTransform: 'capitalize',
          borderRadius: 30,
          color: color,
          "&:hover": {
              backgroundColor: hoverBackColor,
              color: hoverColor
          }
      }}
      component={Link}
      to="https://wa.me/543513115161"
      target="_blank"
    >
        Cotizar <ArrowForwardIcon />
    </Button>
  )
}
