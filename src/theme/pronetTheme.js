import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const pronetTheme = createTheme({
    palette: {
        primary: {
            main: '#F2EAD4'
        },
        secondary: {
            main: '#FFB23E'
        },
        terciary: {
            main: '#D48E03'
        },
        bluePrimary: {
            main: '#9EDAF3'
        },
        blueSecondary: {
            main: '#0499D4'
        },
        blueTerciary: {
            main: '#374E72'
        },
        dark: {
            main: '#27201B'
        },
        error: {
            main: red.A400
        }
    }
})