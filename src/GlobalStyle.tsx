import {createGlobalStyle} from 'styled-components'
import {Normalize} from 'styled-normalize'

export const BasicStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.colors.text.primary};
    font-weight: ${({theme}) => theme.fontWeights.regular};
    background-color: ${({theme}) => theme.colors.general.black[100]};
  }
`

export function GlobalStyles() {
  return (
    <>
      <Normalize />
      <BasicStyles />
    </>
  )
}
