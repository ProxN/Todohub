import React, { useContext } from 'react';
import { Context } from '../../context/app.context';
import Goals from './components/Goals/Goals';
import Calendar from '../../components/Calendar';
import Tasks from './components/Tasks/Tasks';
import Clock from './components/Clock/Clock';
import { HomeMessage, HomeContent, DashGrid, LeftCol } from './Home.styles';

const Home: React.FC = () => {
  const { state } = useContext(Context);
  return (
    <section>
      <HomeContent>
        <HomeMessage>
          Hello&nbsp;
          <span>{state.settings.name}</span>
        </HomeMessage>
        <DashGrid>
          <LeftCol>
            <Calendar />
            <Goals />
          </LeftCol>
          <Tasks />
          <div>
            <Clock />
          </div>
        </DashGrid>
      </HomeContent>
    </section>
  );
};

export default Home;
