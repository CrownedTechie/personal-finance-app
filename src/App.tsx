import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { AuthLayout, AppLayout, ProtectedRoute } from "./layouts";
import { Budgets, Component, Login, Overview, Pots, RecurringBills, Signup, Transactions } from './pages';
import { ToastContainer } from 'react-toastify';
import { useAuth } from './hooks/useAuth';
import { NotFound, PageLoader } from './components';

//Redirecting logged-in users from auth pages
const RedirectIfUser = () => {
  const { user, loading } = useAuth();
  if(loading) <PageLoader />
  return user ? <Navigate to="overview" replace/> : <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "overview",
            element: <Overview />
          },
          {
            path: "transactions",
            element: <Transactions />
          },
          {
            path: "budgets",
            element: <Budgets />
          },
          {
            path: "pots",
            element: <Pots />
          },
          {
            path: "recurring-bills",
            element: <RecurringBills />
          },
        ],
      },
    ],
  },
  {
    element: <RedirectIfUser />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          { index: true, element: <Login />},
          {path: "signup", element: <Signup />},
        ],
      },
    ],
  },
  {
    path: "/components",
    element: <Component />
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}
export default App;
