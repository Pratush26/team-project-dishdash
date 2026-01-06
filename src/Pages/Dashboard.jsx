import { useContext } from "react"
import { UserContext } from "../Context/AuthContext"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeFromCart } from "../features/cartSlice"
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Dashboard() {
    const { user, signOutUser } = useContext(UserContext)
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    return (
        <main className="w-11/12 mx-auto my-8">
            <section className="flex gap-2 items-center justify-center">
                <img src={user?.photoURL} alt="user image" className="aspect-square h-16 object-cover rounded-full" />
                <div className="text-xl font-semibold">
                    <p>{user?.displayName}</p>
                    <p className="text-xs text-gray-600">{user?.email}</p>
                </div>
            </section>
            <div className="flex items-center justify-center">
                <button onClick={signOutUser} className="btn trns btn-primary rounded-md">Sign Out</button>
            </div>
            <section className="my-4 space-y-2">
                <div className="flex items-center justify-between gap-3 flex-wrap my-4">
                    <h3 className="text-xl font-semibold">Cart Items</h3>
                    <button onClick={() => dispatch(clearCart())} className="btn trns btn-primary rounded-full">Clear Cart</button>
                </div>
                {
                    cartItems?.map(e => (
                        <div key={e.foodId} className="flex gap-3 flex-wrap items-center justify-between w-full p-4 rounded-lg bg-white">
                            <p>{e.foodName}</p>
                            <span className="flex gap-3 items-center justify-center">
                                <p>Quantity: {e.quantity}</p>
                                <button onClick={() => dispatch(removeFromCart(e.foodId))} className="btn trns btn-primary rounded-lg"><RiDeleteBin5Line /></button>
                            </span>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}