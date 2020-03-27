import React from 'react';
import styles from './index.less';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};
