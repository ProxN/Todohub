import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Pomodoro from './pages/Pomodoro';
import Layout from './parts/Layout';
import AppContext from './context/app.context';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <AppContext>
      <Layout>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/pomodoro' component={Pomodoro} exact />
          <Route path='/pomodoro' component={Pomodoro} exact />
          <Route path='/settings' component={Settings} exact />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </AppContext>
  );
};

export default App;
