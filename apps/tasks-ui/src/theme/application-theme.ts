import { createTheme } from '@mui/material'

export const applicationTheme = createTheme({
    palette: {
        primary: {
            main: '#FCB100'
        },
        secondary: {
            main: '#5e1313'
        },
        background: {
            default: '#FEFAE0'
        },
    },
    typography: {
        fontFamily: '"Titillium Web", "Roboto"',
        h1: {
            fontWeight: 700,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px'
                }
            }
        }
    }
});