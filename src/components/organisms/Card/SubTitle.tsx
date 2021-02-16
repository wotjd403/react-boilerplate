import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const SubTitleText = styled.p`
  font-size: 0.9rem;
  line-height: 120%;
  color: #251818;
`;

interface SubTitleProps {
  subTitle: string;
}

const SubTitle: FunctionComponent<SubTitleProps> = ({
  ...props
}: SubTitleProps): React.ReactElement => {
  const { subTitle } = props;
  return <SubTitleText>{subTitle}</SubTitleText>;
};

export default SubTitle;
