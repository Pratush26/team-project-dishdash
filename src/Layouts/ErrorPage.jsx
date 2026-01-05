import { Link, useRouteError } from "react-router";
import Navbar from "../Components/Shared/Navbar";
import Error from "../Components/Shared/Error";
import Footer from "../Components/Shared/Footer";

export default function ErrorPage() {
    const {message} = useRouteError()
    return (
        <section className='flex flex-col items-center-safe justify-between min-h-screen'>
            <Navbar />
            <Error msg={message}/>
            <Footer />
        </section>
    )
}