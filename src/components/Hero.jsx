import React from 'react';
import ButtonChanger from './ButtonChanger';
import { Link } from 'react-router-dom';

function Hero(props) {
  return (
    <div
      className="hero min-h-screen flex flex-col justify-between items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex-grow flex flex-col justify-center items-center text-center text-neutral-content">
        <div className="max-w-md bg-gray-900 bg-opacity-80 rounded-lg p-6 mb-6 shadow-lg">
          <h1
            style={{ color: props.color || '#FFD700' }} // ذهبي فاتح للعنوان
            className="mb-5 text-5xl font-bold drop-shadow-lg"
          >
            {props.title}
          </h1>
          <p style={{ color: props.color || '#FFFFFF' }} className="mb-5 text-xl">
            {props.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap mb-8">
        <Link to={'../World22'}>
          <ButtonChanger title="2022 World Cup" />
        </Link>
        <Link to={'../World18'}>
          <ButtonChanger title="2018 World Cup" />
        </Link>
        <Link to={'../World14'}>
          <ButtonChanger title="2014 World Cup" />
        </Link>
        <Link to={'../World10'}>
          <ButtonChanger title="2010 World Cup" />
        </Link>
        <Link to={'../World6'}>
          <ButtonChanger title="2006 World Cup" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
