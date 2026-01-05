import Footer from "../Components/Shared/Footer";
import Loader from "../Components/Shared/Loader";
import Navbar from "../Components/Shared/Navbar";

export default function LoadingPage() {
    return (
        <div className='flex flex-col items-center justify-between min-h-screen'>
            <Navbar />
            <Loader />
            <Footer />
        </div>
    )
}