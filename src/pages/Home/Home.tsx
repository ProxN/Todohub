import React from 'react';
import Goals from './components/Goals/Goals';
import Calendar from '../../components/Calendar';
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
        </DashGrid>
      </HomeContent>
    </section>
  );
};

export default Home;
