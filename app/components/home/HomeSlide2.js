import React from 'react';
import TextSlide from './TextSlide';

function HomeSlide2() {
  return (
    <TextSlide
      title="Explore the impacts of the 2ºC scenario in coastal regions"
      content="A global temperature increase of 2ºC could lead to substantial melting of the Greenland ice sheet, leading to sea level rise of nearly 50cm. Look at the impact on Florida"
      buttons={[
        {
          text: 'Find out more',
          link: '/global-scenarios/32.47/-50.10/3?maps=0,climate,avg-precipitation'
        }
      ]}
      />
  );
}

export default HomeSlide2;
