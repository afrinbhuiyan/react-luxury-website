import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Home/Register";
import ShowDetail from "../pages/ShowDetail/ShowDetail";
import PriveteRoute from "./PriveteRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/properties.json')
            },
            {
                path: '/showDetail',
                element: <PriveteRoute><ShowDetail></ShowDetail></PriveteRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;