import { Box } from "@mui/material"
import ItemGaleria from "../ItemGaleria/ItemGaleria"

const GALERIA_STYLE = {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 875,
    boxShadow: '1px 1px 2px 1px gray',
    borderRadius: '0px 0px 5px 5px',
    padding: 4,
    margin: 0,
    gap: 3,
    flexWrap: 'wrap',
    backgroundColor: '#ebebeb'
}

const Galeria = () => {
  return (
    <Box sx={GALERIA_STYLE}>
        <ItemGaleria />
        <ItemGaleria />
        <ItemGaleria />
        <ItemGaleria />
        <ItemGaleria />
        <ItemGaleria />
        <ItemGaleria />
        <ItemGaleria />        
    </Box>
  )
}

export default Galeria