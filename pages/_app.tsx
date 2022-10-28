import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import darkThemeOptions from '../styles/theme/darkThemeOptions'

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme(darkThemeOptions)
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default MyApp
