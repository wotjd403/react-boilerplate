import styled from '@emotion/styled';
import React, { FunctionComponent } from 'react';

const IntroStyle = styled.section`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid rgb(232, 235, 237);
`;

const IntroTitleStyle = styled.div`
  display: block;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;

const IntroContentStyle = styled.div`
  font-size: 16px;
  color: #544e4e;
  padding-left: 10px;
`;

interface IntroProps {
  content: string;
}

const Intro: FunctionComponent<IntroProps> = ({
  content,
}: IntroProps): React.ReactElement => {
  return (
    <IntroStyle>
      <IntroTitleStyle>소개 :</IntroTitleStyle>
      <IntroContentStyle>{content}</IntroContentStyle>
    </IntroStyle>
  );
};

export default Intro;
