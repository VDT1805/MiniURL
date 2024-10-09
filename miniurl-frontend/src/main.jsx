import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './MainPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import RedirectPage, { urlLoader } from './RedirectPage.jsx';
import Page404 from './Page404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainPage />,
  },
  {
    path: "/404",
    element:  <Page404 />,
  },
  {
    path: "/:shortCode",
    element: <RedirectPage />,
    loader: urlLoader,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </StrictMode>,
)
