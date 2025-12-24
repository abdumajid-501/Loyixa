import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/sign-up" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
