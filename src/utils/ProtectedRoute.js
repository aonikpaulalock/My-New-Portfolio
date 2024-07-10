import { Navigate, useLocation } from "react-router-dom";
import { selectAuthLoading, selectCurrentUser } from "../redux/features/auth/login/loginSlice";
import { useAppSelector } from "../redux/hooks";
import Loading from "../components/Loading";

const ProtectedRoute = ({ children }) => {
  const user = useAppSelector(selectCurrentUser);
  const loading = useAppSelector(selectAuthLoading);
  const location = useLocation();

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default ProtectedRoute;