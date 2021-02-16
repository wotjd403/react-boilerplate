import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import UserName from '@components/molecules/TextWrapper/UserName';
import CreatedAt from '@components/molecules/TextWrapper/CreatedAt';

const TextWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

interface TextWrapperComponentsProps {
  children: any;
}

interface TextWrapperChildComponents {
  UserName: typeof UserName;
  CreatedAt: typeof CreatedAt;
}

const TextWrapper: FunctionComponent<TextWrapperComponentsProps> &
  TextWrapperChildComponents = ({
  children,
}: TextWrapperComponentsProps): React.ReactElement => {
  return <TextWrapperStyle>{children}</TextWrapperStyle>;
};

TextWrapper.UserName = UserName;
TextWrapper.CreatedAt = CreatedAt;

export default TextWrapper;
