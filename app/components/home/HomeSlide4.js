import React from 'react';
import TextSlide from './TextSlide';

function HomeSlide4() {
  return (
    <TextSlide
      title="The 6ºC world"
      content="If the global temperature increases by 6ºC, more than 60% of the planet species studied become increasingly vulnerable to extinction. If we change our behaviour and limit warming to 2ºC the risk it halved."
      buttons={[
        {
          text: 'Find out more',
          link: '/global-scenarios/-/-11.264612212504428,-63.7646484375,4/avg-precipitation/2°C/0/plant-species-richness-remaining/4°C/1/plant-species-richness-remaining/6°C/2'
        }
      ]}
      />

  );
}

export default HomeSlide4;
