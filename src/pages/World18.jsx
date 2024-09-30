import React from 'react';
import Hero from '../components/Hero';
import GOTImage from '../assets/GOT.png';

function World18(){
  return (
    <Hero
      color="white"
      title="2018 World Cup"
      img={GOTImage}
      description="In 2018, the World Cup final was held in Russia, where France faced Croatia. France emerged victorious with a 4-2 win, securing their second World Cup title after 20 years."
    />
  );
}

export default World18;
