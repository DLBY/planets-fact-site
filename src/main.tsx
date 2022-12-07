import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import './assets/styles/index.css';
import { Mercury, Venus } from './pages/index';
import { Planet } from './components/index';
import { planetsData } from './data/data';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/mercury',
//     element: <Mercury />,
//   },
//   {
//     path: '/venus',
//     element: <Venus />,
//   },
// ]);

// TODO
// 1. create common components for each planet
// 2. create dynamic routes for each planet

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
  ].concat(
    planetsData.map((planet) => ({
      path: `/${planet.name}`,
      element: <Planet planetData={planet} />,
    }))
  )
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
