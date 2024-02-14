export const SX_ICON_BUTTON = {
    display: {
        xs: 'flex', 
        sm: 'none' 
    }, 
    "&:hover": {
        color: 'blueSecondary.main'
    }
}

export const SX_PRONET_SVG = { 
    height: { 
        xs: 80, 
        sm: 110 
    },
    pt: 1, 
    pb: 1 
}

export const SX_BOX_NAVLINKS = { 
    display: { 
        xs: 'none', 
        sm: 'flex' 
    }, 
    gap: 1,
    flexWrap: 'wrap' 
}

export const SX_NAVLINK_CONTAINED = {
    fontFamily: 'Parsi',
    fontWeight: 700, 
    fontSize: 20,
    textTransform: 'capitalize',
    color: 'primary.main',
    borderRadius: 20,
    "&:hover": {
      backgroundColor: 'blueSecondary.main'
    }
  }