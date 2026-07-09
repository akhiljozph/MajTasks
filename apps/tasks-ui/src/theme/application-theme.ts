import { createTheme } from '@mui/material'

export const applicationTheme = createTheme({
    palette: {
        primary: {
            main: ''
        },
        secondary: {
            main: ''
        },
        background: {
            default: ''
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto"',
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