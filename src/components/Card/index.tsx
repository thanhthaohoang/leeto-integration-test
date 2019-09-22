import React from 'react';
import { Icon } from 'antd';
import Text from '../Text';
import { Card as CardType } from '../../types';

import { Container, IconContainer, Row, Title } from './styles';

interface CardProps {
  card: CardType;
}

const Card = ({ card }: CardProps) => (
  <Container>
    <Row>
      <IconContainer background={card.color}>
        <Icon type={card.iconName} style={{ fontSize: 18, color: card.color }} />
      </IconContainer>
      <div>
        <Title>{card.title}</Title>
        <Text text={card.description} />
      </div>
    </Row>
  </Container>
);

export default Card;