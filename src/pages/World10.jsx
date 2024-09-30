import React from 'react';
import Hero from '../components/Hero';
import StrangerThingsImage from '../assets/StrangerThingsImage.png';

function World10() {
  return (
    <Hero
      color="white"
      title="2010 World Cup"
      img={StrangerThingsImage}
      description="In 2010, the World Cup final saw Spain facing the Netherlands in South Africa. After an intense match, Spain claimed their first World Cup title with a goal by Andrés Iniesta during extra time."
    />
  );
}

export default World10;
