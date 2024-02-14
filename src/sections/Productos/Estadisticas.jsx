import { Grid, Typography } from "@mui/material"

const TEXTO_STYLE = {
  fontSize: 25,
  fontFamily: 'Parsi',
  fontWeight: 700,
  color: 'secondary.main'
}

const NROS_STYLE = {  
  fontFamily: 'Parsi',
  fontWeight: 700,
  fontSize: 30,
  color: 'blueTerciary.main'  
}

const ITEM_GRID = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',            
  textAlign: 'center',
  p: { xs: '10px 0', sm: '0 10px' },
}

export const Estadisticas = () => {
  return (
    <Grid container 
      sx={{ 
        p: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        bgcolor: 'primary.main'
      }}
    >
      <Grid item xs={ 12 } sm={ 3 }
        sx={{
          ...ITEM_GRID,
          borderRight: { xs: 'none' ,sm: 'solid #0499D4 2px' },
          borderBottom: { xs: 'solid #0499D4 2px' ,sm: 'none' }     
        }}
      >
        <Typography variant="h4" sx={NROS_STYLE}>+43000</Typography>
        <Typography sx={TEXTO_STYLE}>Horas trabajadas</Typography>        
      </Grid>

      <Grid item xs={ 12 } sm={ 3 }
        sx={{
          ...ITEM_GRID,
          borderRight: { xs: 'none' ,sm: 'solid #0499D4 2px' },
          borderBottom: { xs: 'solid #0499D4 2px' ,sm: 'none' }
        }}
      >
        <Typography variant="h4" sx={NROS_STYLE}>+100</Typography>
        <Typography sx={TEXTO_STYLE}>Clientes satisfechos</Typography>        
      </Grid>

      <Grid item xs={ 12 } sm={ 3 }
        sx={{
          ...ITEM_GRID,
          borderRight: { xs: 'none' ,sm: 'solid #0499D4 2px' },
          borderBottom: { xs: 'solid #0499D4 2px' ,sm: 'none' }
        }}
      >
        <Typography variant="h4" sx={NROS_STYLE}>+20000</Typography>
        <Typography sx={TEXTO_STYLE}>Metros de red</Typography>        
      </Grid>

      <Grid item xs={ 12 } sm={ 3 }
        sx={ ITEM_GRID }
      >
        <Typography variant="h4" sx={NROS_STYLE}>10hs</Typography>
        <Typography sx={TEXTO_STYLE}>Promedios de instalación</Typography>
      </Grid> 
    </Grid>
  )
}
