import { useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRouteAdmin = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token && !role) {
      setIsAuthenticated(false);
      navigate("/login");
    } else if (role === "customer") {
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  return isAuthenticated && (children ? children : <Outlet />);
};

export default ProtectedRouteAdmin;
