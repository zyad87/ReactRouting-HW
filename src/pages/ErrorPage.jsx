import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section
      className="bg-cover bg-center h-[100vh] flex flex-col items-center justify-center"

    >
      <div className="bg-black bg-opacity-70 p-10 rounded-lg text-center max-w-md">
        <h1 className="text-gold-500 mb-4 text-8xl font-extrabold tracking-wider">
          404
        </h1>
        <p className="text-4xl font-bold text-white mb-4">
          Oops! Page Not Found.
        </p>
        <p className="text-lg font-light text-gray-300 mb-6">
          Sorry, it seems like you have missed the goal. Let's get back to the main field!
        </p>
        <Link to={'/'}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out">
            Back to Main Menu
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
