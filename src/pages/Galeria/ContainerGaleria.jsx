import { Box } from "@mui/material"
import Galeria from "../../components/Galeria/Galeria";

const ContainerGaleria = () => {
  return (
    <>
        <Box sx={{display: 'flex', justifyContent: 'center', margin: 5, padding: 0}}>
            <Galeria />
        </Box>
    </>
  )
}

export default ContainerGaleria;