import React, { FunctionComponent } from 'react';

import Profile from '@components/organisms/Profile';
import avatar from '@images/avatar_img_1.png';

const UserProfile: FunctionComponent = () => {
  return (
    <>
      <Profile>
        <Profile.Avatar
          url={avatar}
          width="30%"
          height="30%"
          alt="프로필 이미지입니다."
        />
        <Profile.Intro content="안녕하세요 블랭크 개발자 이재성입니다." />
        <Profile.ProfileInfo title="깃헙" content="https://github.com" />
        <Profile.ProfileInfo
          title="메일"
          type="mail"
          content="wotjd403@gmail.com"
        />
      </Profile>
    </>
  );
};

export default UserProfile;
