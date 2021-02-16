import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

const BodyStyle = styled.pre`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #251818;
  overflow: auto;
  white-space: pre-wrap;
  line-height: 1.6;
`;

interface BodyProps {
  text: string;
}

const Body: FunctionComponent<BodyProps> = ({
  text,
}: BodyProps): React.ReactElement => {
  return (
    <>
      <BodyStyle>{text}</BodyStyle>
    </>
  );
};

export default Body;
