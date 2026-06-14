import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import AuthLayouts from '../layouts/AuthLayouts';
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
        Component: Coverage,
        loader: () => fetch('/warehouses.json').then((res) => res.json()),
      },
      {
        path: 'auth',
        Component: AuthLayouts,
        children: [
          { path: 'login', Component: Login },
          { path: 'register', Component: Register },
          { path: 'forgot-password', Component: ForgotPassword },
        ],
      },
    ],
  },
]);
