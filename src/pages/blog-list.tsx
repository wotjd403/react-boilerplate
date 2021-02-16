import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

import TextWrapper from '@components/molecules/TextWrapper';
import Card from '@components/organisms/Card';
import Avatar1 from '@images/avatar_img_1.png';
import Avatar2 from '@images/avatar_img_2.png';
import Avatar3 from '@images/avatar_img_3.png';
import Avatar from '@components/atoms/Avatar';



const WriterInfoStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const BlogList: FunctionComponent = () => {
  const articles = [
    {
      key: 1,
      avatar: {
        url: Avatar1,
        width: '50px',
        height: '50px;',
        alt: '아바타 카드',
      },
      title: `바디럽, 자체 제작 웹예능 ‘스테이 바디럽’ 시리즈 공개!`,
      subTitle: `유튜브 공식 채널서 샘 해밍턴 부자, 엑소 카이 출연하는 웹예능 선보여`,
      userName: `김성우 기자`,
      createdAt: `2020.12.15`,
      path: '/blog-detail',
    },
    {
      key: 2,
      avatar: {
        url: Avatar2,
        width: '50px',
        height: '50px;',
        alt: '아바타 카드',
      },
      title: `블랭크코퍼레이션, 무역의 날 맞아 700만불 수출의 탑 수상`,
      subTitle: ` 2018년 해외 법인 설립, 작년 300만 이어 올해 수출액 700만불 성과`,
      userName: `이재성 기자`,
      createdAt: `2020.12.08`,
      path: '/blog-detail',
    },
    {
      key: 3,
      avatar: {
        url: Avatar3,
        width: '50px',
        height: '50px;',
        alt: '아바타 카드',
      },
      title: `반려동물교감 브랜드 아르르, 론칭 3년 만에 연매출 100억 돌파, 반려동물과 사람이 함께 사는 ‘펫테리어’ 시장 이끈다!`,
      subTitle: `지난달 기준 매출 100억 넘어서… 반려동물용품 브랜드로는 이례적 성과`,
      userName: `서맹관 기자`,
      createdAt: `2020.11.24`,
      path: '/blog-detail',
    },
    {
      key: 4,
      avatar: {
        url: Avatar2,
        width: '50px',
        height: '50px;',
        alt: '아바타 카드',
      },
      title: `언코티드247, 편안함 더한 슬랙스 ‘발란스 팬츠’ 15만 장 판매 돌파`,
      subTitle: `출시 이후 15만 장 판매 돌파, 누적 상품 후기 3만 건 이상`,
      userName: `김성우 기자`,
      createdAt: `2020.07.10`,
      path: '/blog-detail',
    },
    {
      key: 5,
      avatar: {
        url: Avatar1,
        width: '50px',
        height: '50px;',
        alt: '아바타 카드',
      },
      title: `블랭크코퍼레이션 자체 직장 어린이집 ‘블랭크 키즈’ 설립 남대광 대표 사재출연, 육아복지에 선제적 투자`,
      subTitle: `스타트업이 단독으로 설립한 직장 어린이집 첫 사례, 3월 2일 정식 개원`,
      userName: `김성우 기자`,
      createdAt: `2020.02.20`,
      path: '/blog-detail',
    },
  ];

  return (
    <>
      {articles.map((article) => {
        return (
          <Card path={article.path} key={article.key}>
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
            <Card.Title title={article.title} />
            <Card.SubTitle subTitle={article.subTitle} />
          </Card>
        );
      })}
    </>
  );
};

export default BlogList;
