import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterButtonStyle = styled.button`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  min-height: 44px;
  padding: 0 90px;
  background: #2087c9;
  color: #fff;
  z-index: 9999;
`;

interface FooterButtonProps extends ButtonHTMLAttributes<any> {
  text: string;
  type: 'button' | 'submit';
}

const FooterButton: FunctionComponent<FooterButtonProps> = ({
  ...props
}: FooterButtonProps): React.ReactElement => {
  const { type, text, onClick } = props;

  return (
    <FooterButtonStyle type={type} onClick={onClick}>
      {text}
    </FooterButtonStyle>
  );
};

export default FooterButton;
