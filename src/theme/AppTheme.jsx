import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"

import { pronetTheme } from "./pronetTheme"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ pronetTheme }>
        {/* <CssBaseline /> */}
        { children }
    </ThemeProvider>
  )
}
