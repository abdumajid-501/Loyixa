import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ProtectedRoute from "./Protectedroute";

function Route() {
    const router = createBrowserRouter([{
        element: ProtectedRoute(),
        children: [{
            path: "/",
            element: <MainLayout />,
            children: [{
            index: true,
            element: <Home />
        }]},]
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/sign-up",
            element: <SignUp />
        }
    ])
    return <RouterProvider router={router} />;
}

export default Route