import React from 'react';
import Goals from './components/Goals/Goals';
import { HomeMessage, HomeContent, DashGrid } from './Home.styles';

const Home: React.FC = () => {
  return (
    <section>
      <HomeContent>
        <HomeMessage>
          Hello&nbsp;
          <span>Ayoub!</span>
        </HomeMessage>
        <DashGrid>
          <Goals />
        </DashGrid>
      </HomeContent>
    </section>
  );
};

export default Home;
