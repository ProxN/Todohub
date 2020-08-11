import React from 'react';
import Goals from './components/Goals/Goals';
import Calendar from '../../components/Calendar';
import Tasks from './components/Tasks/Tasks';
import Clock from './components/Clock/Clock';
import { HomeMessage, HomeContent, DashGrid, LeftCol } from './Home.styles';

const Home: React.FC = () => {
  return (
    <section>
      <HomeContent>
        <HomeMessage>
          Hello&nbsp;
          <span>Ayoub!</span>
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
