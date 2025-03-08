import Home from "../page/Home";
import MovieDetail from "../page/MovieDetail";
import TVShowDetail from "../page/TVShowDetail";
import PeopleDetail from "../page/PeopleDetail";
import Search from "../page/Search";

const publicRoutes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/movie/:id",
    component: <MovieDetail />,
  },
  {
    path: "/tv/:id",
    component: <TVShowDetail />,
  },
  {
    path: "/people/:id",
    component: <PeopleDetail />,
  },
  {
    path: "/search",
    component: <Search />,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
