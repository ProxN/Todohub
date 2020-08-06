import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './parts/Layout';
import AppContext from './context/app.context';

const App: React.FC = () => {
  return (
    <AppContext>
      <Layout>
        <Switch>
          <Route path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </AppContext>
  );
};

export default App;
