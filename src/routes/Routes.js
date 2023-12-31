import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Banners from "../pages/Home/Home/Banners";
import Chefs from "../pages/Home/Home/Chefs";
import Blog from "../pages/blog/Blog";
import Recipes from "../pages/recipe/Recipes";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error-page";



const router = createBrowserRouter([
    {
        path: '/',
        
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Banners></Banners>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/recipes/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-side-azaadd.vercel.app/chefs/${params.id}`)
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;