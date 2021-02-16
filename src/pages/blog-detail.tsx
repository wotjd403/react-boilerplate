import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

import TextWrapper from '@components/molecules/TextWrapper';
import Content from '@components/organisms/Content';
import Avatar from '@components/atoms/Avatar';
import Avatar1 from '@images/avatar_img_1.png';

const WriterInfoStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const BlogDetail: FunctionComponent = () => {
  const article = {
    key: 1,
    avatar: {
      url: Avatar1,
      width: '50px',
      height: '50px;',
      alt: '아바타 카드',
    },
    title: '바디럽, 자체 제작 웹예능 ‘스테이 바디럽’ 시리즈 공개!',
    subTitle:
      '유튜브 공식 채널서 샘 해밍턴 부자, 엑소 카이 출연하는 웹예능 선보여',
    body: `[어패럴뉴스 박해영 기자] 블랭크코퍼레이션(대표 남대광)의 라이프스타일 브랜드 바디럽이 공식 유튜브 채널을 통해 자체제작 웹예능 ‘스테이 바디럽’ 시리즈를 런칭한다.
바디럽은 길어지는 코로나19 확산에 지친 이들에게 소소한 행복을 공유하고, 깨끗한 물 사용과 손 씻기 등 안전한 습관의 중요성을 전달하고자 이번 콘텐츠를 기획했다.
‘스테이 바디럽’에는 샘 해밍턴과 윌리엄, 벤틀리 형제, 그룹 엑소(EXO)의 카이가 출연한다.
힐링 여행을 주제로 하는 이번 콘텐츠에는 도시를 벗어나 휴식을 즐기는 모습을 담길 예정이다. 윌벤저스와 엑소 카이의 첫 만남을 시작으로 식사 준비, 샘 해밍턴의 낚시 도전, 크리스마스 트리 만들기 등 한적한 시골 마을을 만끽하는 에피소드가 순차적으로 공개된다.
‘스테이 바디럽’은 매주 화, 목요일 오후 7시 30분에 바디럽 공식 유튜브 채널 ‘스튜디오 바디럽’을 통해 확인할 수 있다.`,
    userName: `김성우 기자`,
    createdAt: `2020.12.15`,
    path: '/blog-detail',
  };

  const history = useHistory();
  const handleEdit = () => {
    history.push('/blog-manage');
  };

  return (
    <Content>
      <Content.Title title={article.title} />
      <Content.SubTitle subTitle={article.subTitle} />
      <WriterInfoStyle>
        <Avatar
          url={article.avatar.url}
          width={article.avatar.width}
          height={article.avatar.height}
          alt={article.avatar.alt}
        />
        <TextWrapper>
          <TextWrapper.UserName userName={article.userName} />
          <TextWrapper.CreatedAt createdAt={article.createdAt} />
        </TextWrapper>
      </WriterInfoStyle>
      <Content.Body text={article.body} />
      <Content.FooterButton
        text="수정하기"
        type="button"
        onClick={handleEdit}
      />
    </Content>
  );
};

export default BlogDetail;
