import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;

}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
}

:root {
  --green: #6da544;
  --blue: #27aee1;
  --yellow: #ffda44;
  --default-blue: #03aeeb;
  --default-green: #6bda55;
  --default-yellow: #d7df23;
}

`;

export default GlobalStyle;
