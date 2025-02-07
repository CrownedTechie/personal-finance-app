
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Overview } from './pages/Overview';
import { AuthLayout } from './layouts/AuthLayout';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "overview",
        element: <Overview />
      },
  ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        // loader: redirectIfUser,
      },
      {
        path: "signup",
        element: <Signup />
        // loader: redirectIfUser,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}
export default App;
