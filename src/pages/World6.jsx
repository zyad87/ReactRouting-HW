import React from 'react';
import Hero from '../components/Hero';
import KingdomImage from '../assets/KingdomImage.png';

function World6() {
  return (
    <Hero
      color="white"
      title="2006 World Cup"
      img={KingdomImage}
      description="In the 2006 World Cup final, Italy faced France in an exciting match that ended with Italy winning after a penalty shootout."
    />
  );
}

export default World6;
