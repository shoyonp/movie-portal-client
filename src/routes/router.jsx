import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import AllMovies from "../pages/AllMovies";
import New from "../pages/New";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import UpdateMovie from "../pages/UpdateMovie";
import MovieDetails from "../pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("http://localhost:5000/movies"),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "allmovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "addmovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "updatemovie",
        element: <UpdateMovie></UpdateMovie>,
      },
      {
        path: "new",
        element: <New></New>,
      },
      {
        path:"/detail/:id",
        element:<MovieDetails></MovieDetails>,
        loader: () => fetch("http://localhost:5000/movies")
      }
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
