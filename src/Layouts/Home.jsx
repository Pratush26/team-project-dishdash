import { Outlet } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

export default function HomeLayout() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Navbar/>
            <Outlet />
            <Footer />
        </div>
    )
}