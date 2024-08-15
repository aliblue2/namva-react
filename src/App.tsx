import { QueryClientProvider } from "@tanstack/react-query";
import React, { lazy, Suspense } from "react";
import { FiFilePlus, FiFilm, FiGrid, FiHome, FiSearch } from "react-icons/fi";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./utils/http";
import GenresMovies from "./pages/GenresMovies";
import Auth from "./pages/Auth";
const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/Home"));
const AddMovie = lazy(() => import("./pages/AddMovie"));
const EditMovieDetail = lazy(() => import("./pages/EditMovieDetail"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const Movies = lazy(() => import("./pages/Movies"));
const Error = lazy(() => import("./pages/Error"));
const Search = lazy(() => import("./pages/Search"));
const Genres = lazy(() => import("./pages/Genres"));

export const baseUrl = "https://moviesapi.ir/api/v1/";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense>
        <Root />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "movies",
        children: [
          {
            loader: (meta) =>
              import("./pages/Movies").then((module) => module.loader(meta)),
            index: true,
            element: (
              <Suspense>
                <Movies />
              </Suspense>
            ),
          },
          {
            path: ":movieId",
            loader: (meta) =>
              import("./pages/MovieDetail").then((module) =>
                module.loader(meta)
              ),
            id: "movieDetail",
            children: [
              {
                index: true,
                element: (
                  <Suspense>
                    <MovieDetail />
                  </Suspense>
                ),
              },
              {
                path: "edit",
                element: (
                  <Suspense>
                    <EditMovieDetail />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "add-movie",
            element: (
              <Suspense>
                <AddMovie />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "search",
        element: (
          <Suspense>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/genres",
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <Genres />
              </Suspense>
            ),
            loader: () =>
              import("./pages/Genres").then((module) => module.loader()),
          },
          {
            path: ":genresId",
            element: (
              <Suspense>
                <GenresMovies />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/GenresMovies").then((module) =>
                module.loader(meta)
              ),
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: (
      <Suspense>
        <Auth />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;

type path = {
  path: string;
  name: string;
  icon?: React.ReactNode;
};
export const paths: path[] = [
  {
    name: "خانه",
    path: "/",
    icon: <FiHome size={18} />,
  },
  {
    name: "فیلم ها ",
    path: "/movies?page=1",
    icon: <FiFilm size={18} />,
  },
  {
    name: "ژانر ها ",
    path: "/genres",
    icon: <FiGrid size={18} />,
  },
  {
    name: "افزودن فیلم",
    path: "/movies/add-movie",
    icon: <FiFilePlus size={18} />,
  },
  {
    name: "جستوجو",
    path: "/search",
    icon: <FiSearch size={18} />,
  },
];
