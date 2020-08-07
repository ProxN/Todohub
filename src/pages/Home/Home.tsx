import React from 'react';
import Goals from './components/Goals/Goals';
import { HomeMessage, HomeContent, DashGrid } from './Home.styles';
import Calendar from '../../components/Calendar';

const Home: React.FC = () => {
  return (
    <section>
      <HomeContent>
        <HomeMessage>
          Hello&nbsp;
          <span>Ayoub!</span>
        </HomeMessage>
        <DashGrid>
          <div>
            <Calendar />
            <Goals />
          </div>
        </DashGrid>
      </HomeContent>
    </section>
  );
};

export default Home;
