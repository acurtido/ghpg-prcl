import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Hero from './components/Hero';
import Info from './components/Info';

const router = createHashRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/info",
    element: <Info />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
