import { createBrowserRouter, redirect } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/Login';
import Discover from '../pages/Discover';
import { discoverLoader } from '../loaders/discoverLoader';
import Categories from '../pages/Categories';
import { categoriesLoader } from '../loaders/categoriesLoader';
import Ingredients from '../pages/Ingredients';
import { ingredientsLoader } from '../loaders/ingredientsLoader';
import MealDetails from '../pages/MealDetails';
import CategoryDetails from '../pages/CategoryDetails';
import IngredientDetails from '../pages/IngredientDetails';

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
        children: [
          {
            path: 'discover',
            element: <Discover />,
            loader: discoverLoader,
          },
          {
            path: 'categories',
            element: <Categories />,
            loader: categoriesLoader,
          },
          {
            path: 'categories/:category',
            element: <CategoryDetails />,
          },
          {
            path: 'ingredients',
            element: <Ingredients />,
            loader: ingredientsLoader,
          },
          {
            path: 'ingredients/:ingredient',
            element: <IngredientDetails />,
          },
          {
            path: 'meals/:id',
            element: <MealDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
