import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Banners from "../pages/Home/Home/Banners";
import Chefs from "../pages/Home/Home/Chefs";
import Blog from "../pages/blog/Blog";
import Recipes from "../pages/recipe/Recipes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <Recipes></Recipes>,
                loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
])

export default router;