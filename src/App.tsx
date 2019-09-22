import React from 'react';
import { red, magenta, purple, orange } from '@ant-design/colors';

import { Button } from 'antd';
import Layout from './components/Layout';
import Cards from './components/Cards';
import { Card } from './types';

import { ContentHeader, Title } from './styles';

// Ant design stylesheet
import 'antd/dist/antd.css';

const CARDS: Card[] = [
  {
    title: "150€",
    description: "Par salarié",
    color: "#3DD598",
    iconName: 'user',
  },
  {
    title: "100€",
    description: "Par conjoint",
    color: red[5],
    iconName: 'heart',
  },
  {
    title: "100€",
    description: "Par enfant",
    color: magenta[5],
    iconName: 'user-add',
  },
  {
    title: "214",
    description: "Participants",
    color: purple[5],
    iconName: 'team',
  },
  {
    title: "16 124€",
    description: "Consommé",
    color: orange[5],
    iconName: 'euro',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        {/* TODO: Content Header compo */}
        <ContentHeader>
          <Title>Subvention Sport</Title>
          <Button type="primary" icon="edit">Editer</Button>
        </ContentHeader>
        <Cards cards={CARDS} />
      </Layout>
    </div>
  );
}

export default App;
