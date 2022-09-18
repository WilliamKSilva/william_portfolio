import { extendTheme } from "@chakra-ui/react"

const theme = {
  styles: {
    global: {
      'html, body': {
        height: "100vh",
      },
      '*': {
        margin: 0,
        padding: 0,        
      }
    }
  }
}

export const customTheme = extendTheme(theme);