import { createGlobalStyle } from "styled-components";
import backgroundImage from "../images/mobile-background.png";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: "Nunito", sans-serif;
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background: linear-gradient(180deg, rgba(${theme.bluelightRgb},.95) 0%, rgba(${theme.blueDarkRgb},.95) 100%),
      url(${backgroundImage});
  }
`;

export default GlobalStyle;
