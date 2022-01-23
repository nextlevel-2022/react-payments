import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ecebf1;
  border-radius: 0.4rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #04c09e;
  text-align: center;
`;

const Input = styled.input.attrs({ type: 'number' })`
  width: 92%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 1.1rem;
  color: #04c09e;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BlindInput = styled.input.attrs({
  type: 'password',
})`
  width: 18%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 1.8rem;
  color: #04c09e;
`;

export { Container, Input, BlindInput };
