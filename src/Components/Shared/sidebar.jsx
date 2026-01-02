import { useContext, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "../../Context/AuthContext";
import { NavLink } from "react-router";

export default function Sidebar() {
    const [isOpened, setIsOpened] = useState(false)
    const { user, signOutUser, loading } = useContext(UserContext)
    return (
        <section>
            <button onClick={() => setIsOpened(!isOpened)} className="cursor-pointer text-xl">
                {
                    isOpened ?
                        <RxCross2 />
                        :
                        <RxHamburgerMenu />
                }
            </button>
            <aside className={`fixed ${isOpened ? "translate-x-0" : "translate-x-full"} top-16 right-1 z-10 flex flex-col justify-center gap-2 trns p-4 rounded-lg bg-white`}>
                {
                    loading ?
                        <>
                        </>
                        :
                        user ?
                            <>
                                <div className="flex items-center gap-2">
                                    <img src={user?.photoURL} alt="user image" className="rounded-full h-9 object-cover aspect-square" />
                                    <button onClick={signOutUser} className="btn btn-primary trns rounded-md">Log Out</button>
                                </div>
                                <NavLink className="trns sideLink" to="/dashboard">Dashboard</NavLink>
                                {
                                    user?.role === "admin" ?
                                        <>
                                        </>
                                        :
                                        <>
                                            <NavLink className="trns sideLink" to="/open-restaurant">Open Restaurant</NavLink>
                                            <NavLink className="trns sideLink" to="/manage-restaurant">Manage Restaurant</NavLink>
                                        </>
                                }
                            </>
                            :
                            <>
                                <NavLink className="trns sideLink" to="/Register">Register</NavLink>
                                <NavLink className="trns sideLink" to="/login">Login</NavLink>
                            </>
                }
            </aside>
        </section>
    )
}