import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
        --text-primary: #0c2c4d;
        --text-secondary: #2585e6;
        --text-light: #0c2c4d99;
        --white: #ffffff;
        --background-light: #edf0f5;
    }

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
`;

export default GlobalStyle;
