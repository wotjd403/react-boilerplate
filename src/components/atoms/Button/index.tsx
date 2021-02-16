import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
  width: 100px;
  border: 1px solid #536dfe;
  background-color: #536dfe;
  color: white;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 14px 10px;

  &:hover {
    opacity: 0.7;
  }

  & + & {
    margin-left: 1rem;
  }
`;

interface ButtonProps {
  text: string;
  color?: 'default' | 'primary';
  variant?: 'default' | 'outlined';
  size?: 'small' | 'large';
}

const Index: FunctionComponent<ButtonProps> = ({ text }) => {
  return <ButtonStyle>{text}</ButtonStyle>;
};

export default Index;
