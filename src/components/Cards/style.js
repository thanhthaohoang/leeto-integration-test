import styled from 'styled-components';
import { Col as AntCol } from 'antd';

export const Col = styled(AntCol)`
  margin-bottom: 27px;
  @media(min-width: 1200px) {
    &.ant-col-xl-5 {
      width: 20%;
    }
  }
`;