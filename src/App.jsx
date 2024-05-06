import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Protfolio from './Pages/Protfolio/Protfolio.jsx';
import Contact from './Pages/Contact/Contact.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Protfolio',
    element: <Protfolio />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

