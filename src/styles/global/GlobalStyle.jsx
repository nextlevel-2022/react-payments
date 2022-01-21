import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *,:after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html, body {height:100%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}

  /* global */
  body {
   font-family: "Roboto", "sans-serif";
   font-size: 16px;
  }


  .root-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;
  }

  .root {
    position: relative;
    background-color: #fff;
    width: 375px;
    min-width: 375px;
    height: 700px;
    border-radius: 15px;
  }

  .app {
    height: 100%;
    padding: 16px 28px;
  }
`;

export default GlobalStyle;
