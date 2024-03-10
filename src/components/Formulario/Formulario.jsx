import { useState } from "react";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { SX_BOX_BUTTON, SX_BUTTON_SUBMIT, SX_FORMULARIO, SX_TEXTFIELD } from "./sxFormulario";

export const Formulario = () => {

    const [ nombre, setNombre ] = useState('');
    const [ celular, setCelular ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ producto, setProducto ] = useState('');
    const [ medidas, setMedidas ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( nombre, celular, email, producto, medidas);
        setNombre('');
        setCelular('');
        setEmail('');
        setProducto('');
        setMedidas('');
    }

  return (
    <>
        <form name='formulario-pronet' onSubmit={ handleSubmit }>
            <input type="hidden" name="form-name" value="formulario-pronet" />
            <Grid container spacing={3}
                sx={ SX_FORMULARIO }
            >
                <Grid item xs={ 12 } sm={ 6 }>
                    <TextField
                        name="nombre"
                        id="nombre" 
                        label="Nombre" 
                        type="text" 
                        placeholder='Nombre' 
                        required
                        fullWidth
                        color="dark"
                        value={ nombre }
                        onChange={(event) => setNombre(event.target.value)}                                           
                        sx={ SX_TEXTFIELD }
                    />
                </Grid>

                <Grid item xs={ 12 } sm={ 6 } >
                    <TextField
                        name="celular"
                        id="celular" 
                        label="Celular" 
                        type="text" 
                        placeholder='Celular' 
                        required
                        fullWidth
                        color="dark"
                        value={ celular }
                        onChange={(event) => setCelular(event.target.value)}                    
                        sx={ SX_TEXTFIELD }
                    />
                </Grid>

                <Grid item xs={ 12 }>
                    <TextField
                        name="email" 
                        id="email"
                        label="Correo" 
                        type="email" 
                        placeholder='correo@google.com'
                        required
                        fullWidth
                        color="dark"
                        value={ email }
                        onChange={(event) => setEmail(event.target.value)}                     
                        sx={ SX_TEXTFIELD }
                    />
                </Grid>

                <Grid item xs={ 12 }>                    
                    <TextField
                        name="producto"
                        id="producto"                       
                        select
                        label="Producto"
                        defaultValue="Balcon"                        
                        fullWidth
                        color="dark"
                        value={ producto }
                        onChange={(event) => setProducto(event.target.value)}                     
                        sx={ SX_TEXTFIELD }
                    >
                        <MenuItem value={'Balcon'}>Balcón</MenuItem>
                        <MenuItem value={'Escalera'}>Escalera</MenuItem>
                        <MenuItem value={'Terraza'}>Terraza</MenuItem>
                        <MenuItem value={'Ventana'}>Ventana</MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={ 12 }>
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
                        value={ medidas }
                        onChange={(event) => setMedidas(event.target.value)}
                        sx={ SX_TEXTFIELD }
                    />
                </Grid>

                <Box sx={ SX_BOX_BUTTON }>
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
    </>
  )
}
