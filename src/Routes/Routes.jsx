import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home";
import HomePage from "../Pages/Home";
import RegisterPage from "../Pages/Forms/Register";
import LoginPage from "../Pages/Forms/Login";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
