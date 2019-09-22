import React from 'react';
import { Icon } from 'antd';
import Text from '../Text';
import { Card as CardType } from '../../types';

import { Container, IconContainer, Title } from './styles';

interface Props {
  card: CardType
}

const Card = (props: Props) => (
  <Container>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <IconContainer background={props.card.color}>
        <Icon type={props.card.iconName} style={{ fontSize: 18, color: props.card.color }} />
      </IconContainer>
      <div>
        <Title>{props.card.title}</Title>
        <Text text={props.card.description} />
      </div>
    </div>
  </Container>
);

export default Card;