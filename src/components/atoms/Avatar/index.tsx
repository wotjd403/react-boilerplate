import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: ${(props) => (props.width ? props.width : '20%')};
  height: ${(props) => (props.height ? props.height : '20%')};
`;

interface AvatarProps {
  url: string;
  width: string;
  height: string;
  alt: string;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  url,
  width,
  height,
  alt,
}: AvatarProps): React.ReactElement => {
  return (
    <>
      <AvatarWrapper>
        <AvatarImage src={url} width={width} height={height} alt={alt} />
      </AvatarWrapper>
    </>
  );
};

export default Avatar;
