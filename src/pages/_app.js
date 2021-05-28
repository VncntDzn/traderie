import '../styles/globals.css'
import 'normalize.css'
import theme from 'styles/theme';

import { ThemeProvider, CssBaseline, } from '@material-ui/core';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
