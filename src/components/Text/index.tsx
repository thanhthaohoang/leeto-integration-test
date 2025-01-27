import React from 'react';
import { AntText } from './styles';

interface TextProps {
  text: string;
  style?: React.CSSProperties;
}

const Text = ({ text, style }: TextProps) => (
  <AntText style={style}>
    {text}
  </AntText>
);

export default Text;