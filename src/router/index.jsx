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
import Areas from '../pages/Areas';
import { areasLoader } from '../loaders/areasLoader';
import CategoryDetails from '../pages/CategoryDetails';
import IngredientDetails from '../pages/IngredientDetails';
import CategoryMeals from '../pages/CategoryMeals';
import { categoryMealsLoader } from '../loaders/categoryMealsLoader';
import IngredientMeals from '../pages/IngredientMeals';
import { ingredientMealsLoader } from '../loaders/ingredientMealsLoader';
import AreaMeals from '../pages/AreaMeals';
import { areaMealsLoader } from '../loaders/areaMealsLoader';
import MealDetails from '../pages/MealDetails';
import { mealDetailsLoader } from '../loaders/mealDetailsLoader';
import Search from '../pages/Search';
import { searchLoader } from '../loaders/searchLoader';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';
import ErrorBoundary from '../components/ErrorBoundary';

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
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'categories',
            element: <Categories />,
            loader: categoriesLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'categories/:category',
            element: <CategoryDetails />,
            loader: categoriesLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'categories/:category/meals',
            element: <CategoryMeals />,
            loader: categoryMealsLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'ingredients',
            element: <Ingredients />,
            loader: ingredientsLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'ingredients/:ingredient',
            element: <IngredientDetails />,
            loader: ingredientsLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'ingredients/:ingredient/meals',
            element: <IngredientMeals />,
            loader: ingredientMealsLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'areas',
            element: <Areas />,
            loader: areasLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'areas/:area',
            element: <AreaMeals />,
            loader: areaMealsLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'meals/:id',
            element: <MealDetails />,
            loader: mealDetailsLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'search',
            element: <Search />,
            loader: searchLoader,
            errorElement: <ErrorBoundary />,
          },
          {
            path: 'favorites',
            element: <Favorites />,
          },

          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
]);

export default router;
