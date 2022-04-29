import type { AppProps } from 'next/app';
import styled from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <div id="root-portal" />
      <Root>
        <App>
          <Component {...pageProps} />
        </App>
      </Root>
    </>
  );
}

const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

const App = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
