import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Banners from "../pages/Home/Home/Banners";
import Chefs from "../pages/Home/Home/Chefs";



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
                path: '/',
                element: <Chefs></Chefs>
            }
        ]
    }
])

export default router;