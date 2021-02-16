import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderWrapperStyle = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 44px;
  padding: 0 90px;
  background: #000;
  color: #fff;
  z-index: 9999;
`;

const HeadTitleStyle = styled.div`
  min-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;

interface LinkWrapperProps {
  position: string;
}

const LinkWrapperStyle = styled.div<LinkWrapperProps>`
  position: absolute;
  top: 0;
  min-height: 44px;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  left: ${({ position }) => (position === 'left' ? '0' : '')};
  right: ${({ position }) => (position !== 'left' ? '0' : '')};
`;

interface HeaderTitleProps {
  text: string;
}

const Header: FunctionComponent<HeaderTitleProps> = ({
  text,
}: HeaderTitleProps): React.ReactElement => {
  return (
    <HeaderWrapperStyle>
      <LinkWrapperStyle position="left">
        <Link to="/blog-manage">글쓰기</Link>
      </LinkWrapperStyle>
      <HeadTitleStyle>
        <Link to="/">{text}</Link>
      </HeadTitleStyle>
      <LinkWrapperStyle position="right">
        <Link to="/user-profile">프로필</Link>
      </LinkWrapperStyle>
    </HeaderWrapperStyle>
  );
};

export default Header;
