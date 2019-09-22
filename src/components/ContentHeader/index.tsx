
import React from 'react';
import Button from '../Button';
import { Container, Title } from './styles';

const ContentHeader = () => (
  <Container>
    <Title>Subvention Sport</Title>
    <Button type="primary" icon="edit">Editer</Button>
  </Container>
);

export default ContentHeader;