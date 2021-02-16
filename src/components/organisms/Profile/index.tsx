import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Avatar from '@components/atoms/Avatar';
import Intro from '@components/organisms/Profile/Intro';
import ProfileInfo from '@components/molecules/ProfileInfo';

const ProfileStyle = styled.div`
  margin-top: 4px;
`;

interface ProfileProps {
  children: any;
}

interface ProfileChildComponents {
  Avatar: typeof Avatar;
  Intro: typeof Intro;
  ProfileInfo: typeof ProfileInfo;
}

const Profile: FunctionComponent<ProfileProps> & ProfileChildComponents = ({
  children,
}: ProfileProps): React.ReactElement => {
  return (
    <ProfileStyle>
      <div>{children}</div>
    </ProfileStyle>
  );
};

Profile.Avatar = Avatar;
Profile.Intro = Intro;
Profile.ProfileInfo = ProfileInfo;

export default Profile;
