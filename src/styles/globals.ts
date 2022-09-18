import { extendTheme } from "@chakra-ui/react"

const theme = {
  styles: {
    global: {
      'html, body': {
        height: "100vh",
        backgroundColor: 'rgba(0, 0, 0, 0.64)'
      },
      '*': {
        margin: 0,
        padding: 0,        
      }
    }
  }
}

export const customTheme = extendTheme(theme);