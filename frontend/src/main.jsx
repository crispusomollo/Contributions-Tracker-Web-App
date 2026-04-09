import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter} from 'react-router'
import {RouterProvider} from 'react-router/dom'

import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Contributors from './pages/Contributors'
import Contributions from './pages/Contributions'
import Reports from './pages/Reports'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement:<div>404 not Found</div>
  },
  {
    path:'/dashboard',
    element: <Dashboard />,
  },
  {
    path:'contributors',
    element: <Contributors />,
  },
  {
    path:'contributions',
    element: <Contributions />,
  },
  {
    path:'reports',
    element: <Reports />,
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
