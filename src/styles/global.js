import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    background: #353940;
    color:#fff;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font: 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
