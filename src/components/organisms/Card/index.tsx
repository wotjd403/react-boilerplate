import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Title from '@components/organisms/Card/Title';
import SubTitle from '@components/organisms/Card/SubTitle';

const CardStyle = styled.div`
  padding: 20px;
  background: #ffffff;
  margin-bottom: 20px;
`;

interface CardProps {
  path: string;
  onClickHandler?: never;
  children: any;
}

interface CardChildComponents {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
}

const Card: FunctionComponent<CardProps> & CardChildComponents = ({
  path,
  children,
}: CardProps): React.ReactElement => {
  return (
    <Link to={path}>
      <CardStyle>{children}</CardStyle>
    </Link>
  );
};

Card.Title = Title;
Card.SubTitle = SubTitle;

export default Card;
