import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
      body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        background-color: #e5e5e5;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }
      input, button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      h1, h2, h3, h4, h5, h6{
        font-family:'Maven Pro', sans-serif;
      }

      @media only screen and (max-width: 768px) {
        body {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 576px) {
        body {
          font-size: 10px;
        }
      }

      .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .flex-column-center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .mt-10 {
        margin-top: 2.5rem;
      }

      .mt-20 {
        margin-top: 5rem;
      }

      .mt-30 {
        margin-top: 7.5rem;
      }

      .mt-40 {
        margin-top: 9rem;
      }

      .mt-50 {
        margin-top: 11.5rem;
      }

      .mb-10 {
        margin-bottom: 2.5rem;
      }

      .w-100 {
        width: 100%;
      }

      .w-75 {
        width: 75%;
      }

      .w-50 {
        width: 50%;
      }

      .w-25 {
        width: 25%;
      }

      .w-15 {
        width: 15%;
      }

`;

export default GlobalStyle;
