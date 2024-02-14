export const SX_ITEM_PRODUCTO = { 
    width: '16rem',
    height: '21rem',        
    bgcolor: 'secondary.main',
    transition: '0.2s',        
    "&:hover": {
      transform: 'scale(1.05)',
    },
    "&:nth-of-type(2n)": {
      mt: { xs: 0, sm: 8 }          
    }       
}

export const SX_ITEM_TITULO = {
    fontFamily: 'Parsi',
    fontWeight: 700,
    fontSize: 25,
    color: 'blueTerciary.main'
}

export const SX_ITEM_DESCRIPCION = {
    fontFamily: 'Parsi',
    fontWeight: 400,
    fontSize: 14,
    color: 'blueTerciary.main'
}

export const SX_ITEM_BUTTON = {
    fontFamily: 'Parsi',
    fontWeight: 400,
    fontSize: 18,
    textTransform: 'initial',
}