import React from 'react';
import styled from 'styled-components';

interface InputContainerWithLabelProps {
  children: React.ReactNode;
  label?: string;
}

export default function InputContainerWithLabel({ children, label }: InputContainerWithLabelProps) {
  return (
    <Container>
      <Title>{label}</Title>
      <Inputbox>{children}</Inputbox>
    </Container>
  );
}

const Container = styled.div`
  margin: 16px 0;
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

const Inputbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
  flex-direction: row;
`;
