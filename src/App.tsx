import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout, AppLayout } from "./layouts";
import { Component, Login, Overview, Signup } from './pages';

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
    ],
  },
  {
    path: "/components",
    element: <Component />
  },
]);

function App() {
  return <RouterProvider router={router} />
}
export default App;
