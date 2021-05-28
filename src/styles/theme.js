import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#26CD86',
        },
        secondary: {
            main: '#2AC4B8',
        },
        tertiary: {
            main: '#1B193E'
        }
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 550,
            fontSize: 24
        },
        subtitle1: {
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: 18
        },
    }
});

export default theme;