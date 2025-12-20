import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {
    const user = null
    if (!user) {
        return <Navigate to={"/sign-up"} />
    }
  return <Outlet />
}

export default ProtectedRoute