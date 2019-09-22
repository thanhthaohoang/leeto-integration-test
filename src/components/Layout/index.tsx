import React from 'react';
import { Layout as AntLayout } from 'antd';
import { Header, Sider, Content } from './styles';

const Layout: React.FC = ({ children }) => (
 <AntLayout>
   <Sider />
   <AntLayout>
    <Header />
    <Content>
      {children}
    </Content>
   </AntLayout>
 </AntLayout>
);

export default Layout;
