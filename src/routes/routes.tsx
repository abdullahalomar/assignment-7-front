import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminLayout from "../components/layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import WinterCloth from "../pages/admin/WinterCloth";
import CreateWinterCloth from "../pages/admin/CreateWinterCloth";
import AllWinterClothes from "../pages/Home/AllWinterClothes";
import SingleWinterClothesDetails from "../pages/Home/SingleWinterClothesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "winter-clothes",
        element: <AllWinterClothes></AllWinterClothes>,
      },
      {
        path: "winter-clothes/:id",
        element: <SingleWinterClothesDetails />,
      },
    ],
  },

  // Admin routes
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },

      // all cloths
      {
        path: "winter-cloths",
        element: <WinterCloth></WinterCloth>,
      },
      // add cloth
      {
        path: "create-winter-clothes",
        element: <CreateWinterCloth></CreateWinterCloth>,
      },
    ],
  },

  // Authentication routes
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
