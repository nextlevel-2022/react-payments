import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import CardContainer from '../components/@atom/CardContainer';
import { ROUTE } from '../constants/routes';

const Home: NextPage = () => {
  const router = useRouter();

  const pushCardRegisterPage = () => {
    router.push({ pathname: ROUTE.NEW });
  };

  return (
    <Container>
      <EmptyCard onClick={pushCardRegisterPage}>
        <h2 className="page-title mb-10">보유 카드</h2>
        <CardContainer>+</CardContainer>
      </EmptyCard>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyCard = styled.div`
  cursor: pointer;
`;
