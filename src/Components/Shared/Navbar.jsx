import { Link, NavLink } from "react-router";

export default function Navbar() {
    return (
        <header className="w-full relative">
            <nav className="flex items-center justify-between w-11/12 mx-auto my-4 text-sm font-medium">
                <Link to='/' className="flex gap-2 items-end">
                    <img src={'/favicon.ico'} alt="logo" className="h-9 w-auto" />
                    <span className="font-bold text-2xl">Dish Dash</span>
                </Link>
                <div className="space-x-2 hidden md:block">
                    <NavLink className="trns hover:text-gray-600" to='/'>Home</NavLink>
                    <NavLink className="trns hover:text-gray-600" to='/all-issues'>All Issues</NavLink>
                    <NavLink className="trns hover:text-gray-600" to='/about'>About</NavLink>
                    <NavLink className="trns hover:text-gray-600" to='/contact'>Contact Us</NavLink>
                </div>
                <div className="space-x-2">
                    <NavLink to="/Register">Register</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </nav>
        </header>
    )
}