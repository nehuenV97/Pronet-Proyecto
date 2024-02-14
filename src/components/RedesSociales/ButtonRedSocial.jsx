import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const ButtonRedSocial = ({ children, backColor, color, hoverBackColor, to }) => {
  return (
    <Button 
        variant="contained" 
        color={ backColor }
        sx={{
            color: color,
            p: 0.5,
            borderRadius: 3,
            "&:hover": {
                backgroundColor: hoverBackColor 
            }               
        }}
        component={Link}
        to={ to }
        target="_blank"
    >
        { children }
    </Button>
  )
}
