import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import AllMovies from "../pages/AllMovies";
import New from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import UpdateMovie from "../pages/UpdateMovie";
import MovieDetails from "../pages/MovieDetails";
import PrivateRoute from "./PrivateRoute";
import MyFavoriteMovies from "../pages/MyFavoriteMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://movie-portal-server-khaki.vercel.app/movies"),
      },
      {
        path: "allmovies",
        element: <AllMovies></AllMovies>,
        loader: () =>
          fetch("https://movie-portal-server-khaki.vercel.app/movies"),
      },
      {
        path: "addmovie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "updatemovie/:id",
        element: (
          <PrivateRoute>
            <UpdateMovie></UpdateMovie>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://movie-portal-server-khaki.vercel.app/movies/${params.id}`
          ),
      },
      {
        path: "faq",
        element: <New></New>,
      },
      {
        path: "myfavorite/:email?",
        element: (
          <PrivateRoute>
            <MyFavoriteMovies></MyFavoriteMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://movie-portal-server-khaki.vercel.app/movies"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  // {
  //   path: "auth",
  //   element: <AuthLayout></AuthLayout>,
  //   children: [
  //     {
  //       path: "/auth/login",
  //       element: <Login></Login>,
  //     },
  //     {
  //       path: "/auth/register",
  //       element: <Register></Register>,
  //     },
  //   ],
  // },
]);

export default router;
