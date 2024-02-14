import { IconButton } from "@mui/material"

export const ButtonCarrusel = ({ children, onClick }) => {
  return (
    <IconButton 
        size='large'
        onClick={ onClick }
        sx={{
            color: 'blueTerciary.main',
            backgroundColor: 'secondary.main',
            ':hover': { 
                backgroundColor: 'blueTerciary.main',
                color: 'primary.main',
                opacity: 0.9 
            },            
        }}
    >
        { children }
    </IconButton>
  )
}
