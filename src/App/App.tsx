import React, { FunctionComponent } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import BlogDetail from '@src/pages/blog-detail';
import BlogManage from '@src/pages/blog-manage';
import UserProfile from '@src/pages/user-profile';
import GlobalStyle from '@styles/globalStyle';
import Header from '@components/molecules/Header';
import BlogList from '@src/pages/blog-list';

const PageStyle = styled.div`
  margin-top: 44px;
`;

const App: FunctionComponent = () => {
  return (
    <>
      <Router>
        <Header text="Blank.corp News" />
        <PageStyle>
          <Switch>
            <Route exact path="/" component={BlogList} />
            <Route path="/blog-detail" component={BlogDetail} />
            <Route path="/blog-manage" component={BlogManage} />
            <Route path="/user-profile" component={UserProfile} />
          </Switch>
        </PageStyle>
      </Router>
      <Global styles={GlobalStyle} />
    </>
  );
};

export default App;
