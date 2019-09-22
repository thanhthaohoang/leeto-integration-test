import React from 'react'
import { Row } from 'antd';
import Card from '../Card';
import { Cards as CardsProps } from '../../types';

import { Col } from './style';

const Cards = ({ cards }: CardsProps) => {
  const xl = cards.length >= 5 ? 5 : 24 / cards.length;
  const lg = cards.length >= 5 ? 6 : 24 / cards.length;

  return (
    <Row type="flex" justify="space-between" gutter={21}>
      {cards.map(card =>
        <Col key={card.description} xl={xl} lg={lg} md={12} sm={12} xs={24}>
        <Card card={card} />
      </Col>
      )}
    </Row>
  );
}

export default Cards;
