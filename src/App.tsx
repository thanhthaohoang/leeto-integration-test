import React from 'react';
import './App.css';
import { red, magenta, purple, orange } from '@ant-design/colors';

import { Breadcrumb, Icon } from 'antd';
import Layout from './components/Layout';
import Cards from './components/Cards';
import ContentHeader from './components/ContentHeader';
import CommentEditor from './components/CommentEditor';
import Desc from './components/Desc';
import { Card } from './types';

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
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="left" />
            <span>Avantages</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <ContentHeader />
        <Desc />
        <Cards cards={CARDS} />
        <CommentEditor />
      </Layout>
    </div>
  );
}

export default App;
