import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const CreatedAtStyle = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: #73849a;
`;

interface CreatedAtProps {
  createdAt: string;
}

const CreatedAt: FunctionComponent<CreatedAtProps> = ({
  ...props
}: CreatedAtProps): React.ReactElement => {
  const { createdAt } = props;
  return <CreatedAtStyle>{createdAt}</CreatedAtStyle>;
};

export default CreatedAt;
