import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface ProfileInfoProps {
  title: string;
  content: string;
  type?: string;
}

const ProfileInfoStyle = styled.section`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid rgb(232, 235, 237);
`;

const ProfileTitleStyle = styled.div`
  display: block;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;

const ProfileLinkStyle = styled.a`
  font-size: 16px;
  color: #2174db;
  padding-left: 10px;
`;

const ProfileInfo: FunctionComponent<ProfileInfoProps> = ({
  title,
  content,
  type,
}: ProfileInfoProps): React.ReactElement => {
  return (
    <ProfileInfoStyle>
      <ProfileTitleStyle>{title} :</ProfileTitleStyle>
      <ProfileLinkStyle href={type ? `mailto:${content}` : content}>
        {content}
      </ProfileLinkStyle>
    </ProfileInfoStyle>
  );
};

export default ProfileInfo;
