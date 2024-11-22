import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import DonationForm from './ DonationForm'; // Ensure no space in the import path
import Project from './Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home", // No leading slash
        element: <Home />,
      },
      {
        path: "Project", // No leading slash
        element: <Project />,
      },
      {
        path: "DonationForm", // No leading slash
        element: <DonationForm />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);