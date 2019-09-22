import styled from 'styled-components';
import { Typography } from 'antd';
import { grey } from '@ant-design/colors';
const { Text } = Typography;

export const AntText = styled(Text)`
  font-size: 14px;
  color: ${grey[7]};
`;