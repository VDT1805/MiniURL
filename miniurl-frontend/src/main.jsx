import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './MainPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RedirectPage, { urlLoader } from './RedirectPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainPage />,
  },
  {
    path: "/:shortCode",
    element: <RedirectPage />,
    loader: urlLoader,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
