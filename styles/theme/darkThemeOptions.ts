import { ThemeOptions } from '@mui/material/styles'

const darkThemeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF;'
        }
      },
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            position: 'relative',
            border: 0,
            borderRadius: 6,
            background: '#161616',
            backgroundClip: 'padding-box',
            '&:after': {
              position: 'absolute',
              top: -2,
              left: -2,
              right: -2,
              bottom: -2,
              background: `linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%)`,
              content: '""',
              zIndex: -1,
              borderRadius: 6
            },
            '&:hover': {
              position: 'relative',
              border: 0,
              borderRadius: 6,
              background: '#161616',
              backgroundClip: 'padding-box'
            },
            '&:action': {
              position: 'relative',
              border: 0,
              borderRadius: 6,
              background: '#161616',
              backgroundClip: 'padding-box'
            }
          }
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundImage: `linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%)`
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: '#161616',
            '&:hover': {
              backgroundColor: '#161616'
            },
            '&:action': {
              backgroundColor: '#161616'
            }
          }
        }
      ]
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF'
    }
  }
}

export default darkThemeOptions
