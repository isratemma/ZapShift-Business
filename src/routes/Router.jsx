import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from '../layouts/RootLayout';
import AuthLayouts from '../layouts/AuthLayouts';
import PrivateRoute from './PrivateRoute';

// Lazy-load all pages — they only download when first visited
const Home          = lazy(() => import('../pages/Home/Home'));
const Coverage      = lazy(() => import('../pages/Coverage/Coverage'));
const Login         = lazy(() => import('../pages/Auth/Login'));
const Register      = lazy(() => import('../pages/Auth/Register'));
const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPassword'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <span className="loading loading-spinner loading-lg text-[#CAEB66]"></span>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}><Home /></Suspense>,
      },
      {
        path: 'coverage',
        element: (
          <PrivateRoute>
            <Suspense fallback={<PageLoader />}>
              <Coverage />
            </Suspense>
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
      {
        path: 'login',
        element: <Suspense fallback={<PageLoader />}><Login /></Suspense>,
      },
      {
        path: 'register',
        element: <Suspense fallback={<PageLoader />}><Register /></Suspense>,
      },
      {
        path: 'forgot-password',
        element: <Suspense fallback={<PageLoader />}><ForgotPassword /></Suspense>,
      },
    ],
  },
]);
