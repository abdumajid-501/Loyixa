import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ProtectedRoute from "./ProtectedRoute";

function Route() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoute />,  
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Route;
