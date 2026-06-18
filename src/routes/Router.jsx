import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import AuthLayouts from '../layouts/AuthLayouts';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'coverage',
        element: (
          <PrivateRoute>
            <Coverage />
          </PrivateRoute>
        ),
        loader: () => fetch('/warehouses.json').then((res) => res.json()),
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayouts,
    children: [
      { path: 'login',            Component: Login },
      { path: 'register',         Component: Register },
      { path: 'forgot-password',  Component: ForgotPassword },
    ],
  },
]);
