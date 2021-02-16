import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const TitleStyle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TitleText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 120%;
`;

interface TitleProps {
  title: string;
}

const Title: FunctionComponent<TitleProps> = ({
  ...props
}: TitleProps): React.ReactElement => {
  const { title } = props;
  return (
    <TitleStyle>
      <TitleText>{title}</TitleText>
    </TitleStyle>
  );
};

export default Title;
