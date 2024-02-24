import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/App.scss'
import './assets/css/index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import _routes from "./router/_routes";

const router = createBrowserRouter(_routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
