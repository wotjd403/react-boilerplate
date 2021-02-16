import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

const SubTitleStyle = styled.p`
  margin-top: 1rem;
  margin-bottom: 20px;
  font-size: 0.8rem;
  line-height: 120%;
  color: #444;
`;

interface TitleProps {
  subTitle: string;
}

const SubTitle: FunctionComponent<TitleProps> = ({
  subTitle,
}: TitleProps): React.ReactElement => {
  return (
    <>
      <SubTitleStyle>{subTitle}</SubTitleStyle>
    </>
  );
};

export default SubTitle;
