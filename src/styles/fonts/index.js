import { createGlobalStyle } from "styled-components";
import RobotoWoff from "./Roboto.woff";
import RobotoWoff2 from "./Roboto.woff2";
import RobotoTtf from "./Roboto.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    font-weight: 300;
    src: url(${RobotoWoff}) format("woff"),
         url(${RobotoWoff2}) format("woff2"),
         url(${RobotoTtf}) format("truetype");
  }
`;
