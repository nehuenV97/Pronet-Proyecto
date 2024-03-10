import { Box, Button, Grid, MenuItem, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

import { SX_BOX_BUTTON, SX_BUTTON_SUBMIT, SX_FORMULARIO, SX_TEXTFIELD } from "./sxFormulario"

export const FormInfo = () => {
  return (
    <form name="pronet" method="post" action="/envio">
        <input type="hidden" name="form-name" value="pronet" />
        <Grid container 
            spacing={3}
            sx={ SX_FORMULARIO }
        >
            <Grid item xs={ 12 } sm={ 6 }>
                {/* <label htmlFor="nombre">Nombre</label> <br />
                <input type="text" id="nombre" name="nombre" required /> */}
                <TextField 
                    type="text"
                    id="nombre" 
                    name="nombre" 
                    required
                    placeholder='Nombre'
                    fullWidth
                    color="dark"
                    sx={ SX_TEXTFIELD }
                />
            </Grid>
            

            <Grid item xs={ 12 } sm={ 6 }>
                {/* <label htmlFor="cel">Celular</label> <br />
                <input type="text" id="cel" name="cel" required /> */}
                <TextField 
                    type="text"
                    id="cel" 
                    name="cel" 
                    required
                    placeholder='Celular'
                    fullWidth
                    color="dark"
                    sx={ SX_TEXTFIELD }
                />
            </Grid>
            

            <Grid item xs={ 12 }>
                {/* <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required /> */}
                <TextField 
                    type="email"
                    id="email" 
                    name="email" 
                    required
                    placeholder='Email'
                    fullWidth
                    color="dark"
                    sx={ SX_TEXTFIELD }
                />
            </Grid>
            

            <Grid item xs={ 12 }>
                {/* <label htmlFor="producto">Producto</label> <br />
                <select name="producto" id="producto">
                    <option value="">--Elija un tipo--</option>
                    <option value="balcon">Balcon</option>
                    <option value="ventana">Ventana</option>
                    <option value="terraza">Terraza</option>
                    <option value="escalera">Escalera</option>                
                </select> */}
                <TextField
                        name="producto"
                        id="producto"                       
                        select                        
                        label="Producto"
                        required                        
                        fullWidth
                        color="dark"                                            
                        sx={ SX_TEXTFIELD }
                    >
                        <MenuItem value={'Balcon'}>Balcon</MenuItem>
                        <MenuItem value={'Escalera'}>Escalera</MenuItem>
                        <MenuItem value={'Terraza'}>Terraza</MenuItem>
                        <MenuItem value={'Ventana'}>Ventana</MenuItem>
                    </TextField>
            </Grid>
            

            <Grid item xs={ 12 }>
                {/* <label htmlFor="medidas">Medidas</label> <br />
                <textarea id="medidas" name="medidas" required></textarea> */}
                <TextField
                    name="medidas"
                    id="medidas"
                    type="text"                    
                    multiline
                    placeholder="Ingresar medidas"
                    required
                    fullWidth
                    minRows={ 5 }
                    color="dark"                    
                    sx={ SX_TEXTFIELD }
                />
            </Grid>
            

            <Box sx={ SX_BOX_BUTTON }>
                {/* <input type="submit" value="Enviar" /> */}
                <Button 
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={ SX_BUTTON_SUBMIT }
                >
                    Enviar <SendIcon sx={{ pl: 0.5 }}/>
                </Button>
            </Box>
            
        </Grid>
    </form>
  )
}
