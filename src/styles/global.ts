import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.pallete['base-background']};
    color: ${({ theme }) => theme.pallete['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
    color: ${({ theme }) => theme.pallete['base-title']};
  }

  h1 {
    font-weight: 800;
  }

  button {
    cursor: pointer;
  }

`;
