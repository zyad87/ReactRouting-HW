import React from 'react';
import Hero from '../components/Hero';
import breakingBadImage from '../assets/breakingBad.png';

function World22() {
  return (
    <Hero
      color="white"
      title="2022 World Cup"
      img={breakingBadImage}
      description="In 2022, the World Cup final was held in Qatar, where Argentina faced France. Argentina won an exciting match on penalties after a 3-3 draw, with Lionel Messi leading his team to their third World Cup title."
    />
  );
}

export default World22;
