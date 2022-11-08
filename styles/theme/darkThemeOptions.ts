import { ThemeOptions } from '@mui/material/styles'
import colorTheme from './color'

const  {
	colorWhite,
	colorBlack,
	colorGrey,
	colorPink,
	colorPurple
} = colorTheme

declare module '@mui/material/styles' {
  interface PaletteColor {
    colorPink?: string;
		colorPurple?: string
  }
  interface SimplePaletteColorOptions {
    colorPink?: string;
		colorPurple?: string
  }
}

const darkThemeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: colorWhite
        }
      },
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            position: 'relative',
            border: 0,
            borderRadius: 6,
            background: colorBlack,
            backgroundClip: 'padding-box',
            '&:after': {
              position: 'absolute',
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: `linear-gradient(91.47deg, ${colorPink} 3.73%, ${colorPurple} 100%)`,
              content: '""',
              zIndex: -1,
              borderRadius: 6
            },
            '&:hover': {
              position: 'relative',
              border: 0,
              borderRadius: 6,
              background: colorBlack,
              backgroundClip: 'padding-box'
            },
            '&:action': {
              position: 'relative',
              border: 0,
              borderRadius: 6,
              background: colorBlack,
              backgroundClip: 'padding-box'
            }
          }
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundImage: `linear-gradient(91.47deg, ${colorPink} 3.73%, ${colorPurple} 100%)`
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: colorBlack,
            '&:hover': {
              backgroundColor: colorBlack
            },
            '&:action': {
              backgroundColor: colorBlack
            }
          }
        }
      ]
    }
  },
  palette: {
    mode: 'dark',
		primary: {
      main: colorWhite,
      light: colorGrey,
      dark: colorBlack,
			colorPink,
			colorPurple
    }
  }
}

export default darkThemeOptions
