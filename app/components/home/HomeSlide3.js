import React from 'react';
import TextSlide from './TextSlide';

export function HomeSlide3() {
  return (
    <TextSlide
      title="Arctic sea ice during winter in the 4ºC world"
      content="If the global average temperature increases by 4ºC then temperatures in the Arctic could increase by over 8ºC, which means winter sea ice cover may decline by 47%."
      buttons={[
        {
          text: "Find out more",
          link: "/global-scenarios/-/78.73350050778467,4.5703125,3/avg-precipitation/2°C/0/plant-species-richness-remaining/4°C/1"
        }
      ]} />
  );
}

export default HomeSlide3;
