import React from 'react';

function ButtonChanger(props) {
  return (
    <div className="block max-w-[18rem] rounded-lg bg-yellow-500 text-left text-white hover:bg-yellow-600 hover:scale-110 hover:cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out transform max-md:w-[7rem]">
      <div className="max-md:p-4 text-center p-8">
        <h5 className="mb-1 text-xl font-medium leading-tight text-center max-md:text-lg">
          {props.title}
        </h5>
      </div>
    </div>
  );
}

export default ButtonChanger;
