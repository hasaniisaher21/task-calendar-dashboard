import React from 'react';
import { Layout } from 'antd';
import CalendarView from './components/CalendarView';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ color: '#fff' }}>Task Calendar Dashboard</Header>
      <Content style={{ padding: '20px' }}>
        <CalendarView />
      </Content>
    </Layout>
  );
}

export default App;
