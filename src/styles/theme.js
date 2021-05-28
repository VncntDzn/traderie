import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3bbf0e',
        },
        secondary: {
            main: '#ffffff',
        },
    },
    typography: {
        subtitle1: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: 24
        },
    }
});

export default theme;