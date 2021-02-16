import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import Title from '@components/organisms/Content/Title';
import SubTitle from '@components/organisms/Content/SubTitle';
import Body from '@components/organisms/Content/Body';
import FooterButton from '@components/atoms/FooterButton';

const ContentStyle = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`;

interface ContentProps {
  children: any;
}

interface ContentChildComponents {
  Title: typeof Title;
  SubTitle: typeof SubTitle;
  Body: typeof Body;
  FooterButton: typeof FooterButton;
}

const Content: FunctionComponent<ContentProps> & ContentChildComponents = ({
  children,
}: ContentProps): React.ReactElement => {
  return (
    <>
      <ContentStyle>{children}</ContentStyle>
    </>
  );
};

Content.Title = Title;
Content.SubTitle = SubTitle;
Content.Body = Body;
Content.FooterButton = FooterButton;

export default Content;
