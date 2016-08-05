import React from 'react';
import TextSlide from './TextSlide';

export function HomeSlide6() {
  return (
    <TextSlide
      title="Arctic sea ice during winter in the 4ºC world"
      content="If the global average temperature increases by 4ºC then temperatures in the Arctic could increase by over 8ºC, which means winter sea ice cover may decline by 47%."
      buttons={[
        {
          text: "Compare countries",
          link: "/global-scenarios/-/72.47527631092942,-55.72265625,3/plant-species-richness-remaining/6°C/0"
        }
      ]} />

  );
}

export default HomeSlide6;
