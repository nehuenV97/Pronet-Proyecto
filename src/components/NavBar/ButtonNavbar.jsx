import { Button } from "@mui/material"
import { HashLink } from "react-router-hash-link"

export const ButtonNavbar = ( { children, to } ) => {
  return (
    <Button
        color='blueTerciary'
        component={ HashLink }
        smooth
        to={ to }        
        sx={{ 
            fontFamily: 'Parsi',
            fontWeight: 700,
            fontSize: { md: 20, sm: 18 },
            textTransform: 'capitalize',
            borderRadius: 20,
            "&:hover": {
                color: 'blueSecondary.main'
            }
        }}>
        { children }
    </Button>
  )
}

