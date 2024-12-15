import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Admin/Dashboard";
import Service from "../pages/Admin/Service/Service";
import Create from "../pages/Admin/Service/Create";
import Payment from "../pages/Payment";
import PaymentProof from "../pages/PaymentProof";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services/:id",
    element: (
      <ProtectedRoute>
        <Booking />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment",
    element: (
      <ProtectedRoute>
        <Payment />
      </ProtectedRoute>
    ),
  },
  {
    path: "/upload_payment/:id",
    element: (
      <ProtectedRoute>
        <PaymentProof />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRouteAdmin>
        <Dashboard />
      </ProtectedRouteAdmin>
    ),
  },
  {
    path: "/dashboard/service",
    element: (
      <ProtectedRoute>
        <Service />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/service/create",
    element: (
      <ProtectedRoute>
        <Create />
      </ProtectedRoute>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
