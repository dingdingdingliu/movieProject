import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import darkThemeOptions from '../styles/theme/darkThemeOptions'
import { AppPropsWithLayout } from "next/app";
import { ReactNode } from 'react';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  const darkTheme = createTheme(darkThemeOptions)
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        {getLayout(<Component {...pageProps}/>)}
      </CssBaseline>
    </ThemeProvider>
  )
}

export default MyApp
