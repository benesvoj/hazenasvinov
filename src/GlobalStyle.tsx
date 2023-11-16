import {createGlobalStyle} from "styled-components";

export const BasicStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
`

export function GlobalStyles() {
    return (
        <>
            {/*<Normalize />*/}
            <BasicStyles/>
        </>
    );
}
