import styled from 'styled-components';

const Container = styled.div`
  height: 4rem;
  width: 23rem;
  margin: 0.75rem 0 0.75rem 0;
  color: #525252;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
`;

const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex: auto;
  font-size: 0.75rem;
  font-weight: 400;
`;

const Title = styled.div`
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: visible;
  margin-right: 4%;
  width: max-content;
  word-spacing: -0.05rem;
`;

const ValidMessage = styled.div`
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
`;

export { Container, Header, Title, ValidMessage, Body };
