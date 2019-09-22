import React from 'react';
import { blue, gold } from '@ant-design/colors';
import Text from '../Text';

import { Tag, Icon } from 'antd';
import { Avatar, Container, InfoContainer, InfoText, Row } from './styles';


const Desc = () => (
  <Container>
    <Avatar>
      <span role='img' aria-label="emoji fencing">🤺</span>
    </Avatar>
    <div>
      <Row>
        <div>
          <Tag color='magenta'>Subvention</Tag>
        </div>
        <InfoContainer>
          <Icon type='calendar' style={{ color: gold[3], marginRight: 6 }} />
          <InfoText>Inscriptions : 01/01/2019 - 27/12/2019</InfoText>
        </InfoContainer>
        <InfoContainer>
          <Icon type='clock-circle' style={{ color: blue[5], marginRight: 6 }} />
          <InfoText>165 jours restants avant la fermeture</InfoText>
        </InfoContainer>
      </Row>
      <Text
        text="Remboursement des activités sportives des salariés à hauteur de 150€ sur présentation de factures nominatives de licence sportive, d’adhésion à un club de sport ou d'achat de billetterie pour des événements sportifs."
        style={{ display: 'block', maxWidth: '70%' }}
      />
    </div>
  </Container>
)

export default Desc;