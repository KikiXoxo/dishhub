import { createBrowserRouter, redirect } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
import Discover from '../pages/Discover';

const router = createBrowserRouter([
  // Redirect route
  {
    path: '/',
    loader: () => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      return redirect(isLoggedIn ? '/discover' : '/login');
    },
  },

  // Actual routes
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [{ path: 'login', element: <Login /> }],
      },
      {
        element: <DashboardLayout />,
        loader: () => {
          const isLoggedIn = localStorage.getItem('isLoggedIn');
          if (!isLoggedIn) {
            return redirect('/login');
          }
          return null;
        },
        children: [{ path: 'discover', element: <Discover /> }],
      },
    ],
  },
]);

export default router;
