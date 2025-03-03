import Home from "../page/Home";
import MovieDetail from "../page/MovieDetail";


const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/movie/:id",
        component: MovieDetail,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
