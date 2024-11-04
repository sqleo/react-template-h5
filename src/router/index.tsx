import { lazy } from "react";

const Home = lazy(() => import('@/views/home'));

const routes = [
    {
        path: '/',
        element: <Home />,
    },
];

export default routes;
