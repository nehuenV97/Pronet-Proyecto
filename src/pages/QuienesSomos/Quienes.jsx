import { Box, Typography } from "@mui/material"

const Quienes = () => {
  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '1px 1px 2px 1px gray', borderRadius: '0px 0px 5px 5px', backgroundColor: '#ebebeb'}}>
            <Typography variant="h5">PRONET: Redes de seguridad (Quienes somos)</Typography>
            <Box sx={{maxWidth: 700, padding: '0 10px'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus aperiam ipsa praesentium dolores fugit! Consectetur maiores quisquam tempora odit amet maxime autem harum! Nisi vitae sapiente, atque vel error quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit adipisci ipsam sint, architecto quidem rerum, perferendis et deleniti officia inventore nemo ipsa praesentium, necessitatibus recusandae quae eaque veritatis itaque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deleniti pariatur necessitatibus quae facilis delectus! Molestiae unde accusamus exercitationem officia suscipit, nemo fuga laboriosam minus repellendus fugit, accusantium asperiores cum!
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Quienes