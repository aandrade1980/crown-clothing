import React from 'react';

// Components
import Directory from '../../components/directory/directory';

// Styled
import { HomePageContainer } from './homepage.styles';

export const HomePage = () => {
  return (
    <HomePageContainer>
      <React.Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration
          });
        }}
      >
        <Directory />
      </React.Profiler>
    </HomePageContainer>
  );
};
