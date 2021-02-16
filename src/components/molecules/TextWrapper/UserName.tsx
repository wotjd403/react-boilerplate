import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const UserNameStyle = styled.span`
  margin-bottom: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #303943;
`;

interface UserNameProps {
  userName: string;
}

const UserName: FunctionComponent<UserNameProps> = ({
  ...props
}: UserNameProps): React.ReactElement => {
  const { userName } = props;
  return <UserNameStyle>{userName}</UserNameStyle>;
};

export default UserName;
