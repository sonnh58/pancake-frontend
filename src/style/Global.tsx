import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'pancake-uikit/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'SVN-Gilroy', sans-serif;
  }
  body {
    background-color: ${({ theme }) => {
      console.log(theme)
      return theme.colors.background
    }};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
