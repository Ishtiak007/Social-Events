import React from 'react'
import ReactDOM from 'react-dom/client'
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
import CategoryDetails from './assets/Components/AllCategories/CategoryDetails';
import Login from './assets/Components/Login/Login';
import Register from './assets/Components/Register/Register';
import AuthProvider from './assets/Provider/AuthProvider';
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
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/category/:id',
        element: <CategoryDetails></CategoryDetails>,
        loader: () => fetch('../data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
