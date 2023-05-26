import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blogs/Blog";
import AllToys from "../pages/AllToys/AllToys";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../pages/AddToys/AddToys";
import ToyDetail from "../pages/ToyDetail/ToyDetail";
import MyToy from "../pages/MyToy/MyToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Error404 from "../pages/Error404/Error404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/allToys/:id',
                element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/myToy',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <Error404></Error404>
    }
]);
export default router;