import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import ErrorPage from '../pages/ErrorPage';
import World22 from '../pages/World22';
import World18 from '../pages/World18';
import World14 from '../pages/World14';
import World10 from '../pages/World10';
import World6 from '../pages/World6';
import World from '../pages/World';

const router = createBrowserRouter([
  {
    path: '/',
    element: <World />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/World22',
    element: <World22 />,
  },
  {
    path: '/World18',
    element: <World18 />,
  },
  {
    path: '/World14',
    element: <World14 />,
  },
  {
    path: '/World10',
    element: <World10 />,
  },
  {
    path: '/World6',
    element: <World6 />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
