import React from 'react';
import { Typography } from 'antd';
import { grey } from '@ant-design/colors';

const { Text: AntText } = Typography;

interface TextProps {
  text: string;
}

const Text = (props: TextProps) => (
  <AntText style={{ fontSize: 14, color: grey[7]}}>
    {props.text}
  </AntText>
);

export default Text;