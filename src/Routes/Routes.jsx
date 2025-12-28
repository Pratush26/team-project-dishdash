import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home";
import HomePage from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
        ]
    }
])