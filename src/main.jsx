import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard.jsx';
import AddEvent from './components/AddEvent.jsx';
import Help from './components/Help.jsx';
import RegistrationArea from './components/RegistrationArea.jsx';

import { RegisterProvider } from './RegisterContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/add-event",
    element: <AddEvent />
  },
  {
    path: "/help",
    element: <Help />
  },
  {
    path: "/register-me",
    element: <RegistrationArea />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterProvider>
      <RouterProvider router={router} />
    </RegisterProvider>
  </StrictMode>,
)
