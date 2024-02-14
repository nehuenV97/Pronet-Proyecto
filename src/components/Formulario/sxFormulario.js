export const SX_FORMULARIO = { 
    bgcolor: 'blueSecondary.main', 
    pr: 3,
    pb: 3, 
    borderRadius: '40px 5px 40px 40px' 
}

export const SX_TEXTFIELD = { 
    backgroundColor: 'primary.main', 
    borderRadius: 1,
    // "&:visited": {
    //     backgroundColor: 'primary.main'
    // }                         
}

export const SX_BOX_BUTTON = { 
    display: 'flex', 
    width: '100%', 
    justifyContent: 'end'
}

export const SX_BUTTON_SUBMIT = { 
    mt: 2, 
    fontFamily: 'Parsi', 
    fontWeight: 400, 
    fontSize: 18,
    textTransform: 'capitalize',
    borderRadius: 30,
    color: 'dark',
    "&:hover": {
        backgroundColor: 'terciary.main',
        color: 'primary.main'
    }
}