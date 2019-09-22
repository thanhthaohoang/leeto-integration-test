import styled from 'styled-components';
import { Layout } from 'antd';
const { Header: AntHeader, Sider: AntSider, Content: AntContent } = Layout;

export const Content = styled(AntContent)`
  padding: 32px 90px;
  background: #FAFAFB;
`

export const Header = styled(AntHeader)`
  &.ant-layout-header {
    background: #FFFFFF;
    box-shadow: inset -1px -1px 0px #E2E2EA;
  }
`

export const Sider = styled(AntSider)`
  &.ant-layout-sider {
    background: #FFFFFF;
    box-shadow: inset -1px -1px 0px #E2E2EA;
  }
`