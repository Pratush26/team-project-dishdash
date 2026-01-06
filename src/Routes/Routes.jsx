import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home";
import HomePage from "../Pages/Home";
import RegisterPage from "../Pages/Forms/Register";
import LoginPage from "../Pages/Forms/Login";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import OpenRestaurantForm from "../Pages/Forms/OpenRestaurent";
import ManageRestaurant from "../Pages/tables/ManageRestaurant";
import Food from "../Pages/Food";
import Dashboard from "../Pages/Dashboard";
import Restaurant from "../Pages/Restaurant";
import LoadingPage from "../Layouts/Loading";
import ErrorPage from "../Layouts/ErrorPage";
import FoodDetail from "../Pages/FoodDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        HydrateFallback: <LoadingPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "register",
                Component: RegisterPage
            },
            {
                path: "login",
                Component: LoginPage
            },
            {
                path: "open-restaurant",
                element: <OpenRestaurantForm />
            },
            {
                path: "manage-restaurant",
                element: <ManageRestaurant />
            },
            {
                path: "/restaurant/:id",
                element: <Restaurant />
            },
            {
                path: "/foodDetails/:id",
                element: <FoodDetail />
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "foods",
                Component: Food
            }
        ]
    }
])
