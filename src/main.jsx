import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './assets/Components/MainLayout/MainLayout.jsx';
import Home from './assets/Components/Home/Home.jsx';
import Service from './assets/Components/Service/Service.jsx';
import Feature from './assets/Components/Feature/Feature.jsx';
import About from './assets/Components/About/About.jsx';
import AllCategories from './assets/Components/AllCategories/AllCategories.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/feature',
        element: <Feature></Feature>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
