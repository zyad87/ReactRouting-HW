import React from 'react';
import Hero from '../components/Hero';
import TheWitcherImage from '../assets/TheWitcherImage.png';

function World14() {
  return (
    <Hero
      color="white"
      title="2014 World Cup"
      img={TheWitcherImage}
      description="In 2014, the World Cup final took place in Brazil, where Germany faced Argentina. Mario Götze scored the winning goal in extra time, securing Germany's fourth World Cup title."
    />
  );
}

export default World14;
