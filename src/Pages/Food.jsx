import { useEffect, useState } from "react"
import { useAxios } from "../Hooks/UseAxios"
import { Link } from "react-router"
import { toast } from "react-toastify"

export default function Food() {
    const axis = useAxios()
    const [resData, setResData] = useState([])
    useEffect(() => {
        axis(`/menuItems`)
            .then(res => setResData(res.data))
            .catch(err => console.error(err))
    }, [axis])
    console.log(resData)
    return (
        <main className="w-11/12 mx-auto my-8">
            <h1 className="text-center text-3xl font-semibold m-4">All Foods</h1>
            <section className="grid grid-cols-4 items-center-safe justify-items-center-safe gap-4 min-h-[50vh]">
                {resData.length > 0 ?
                    resData?.map(e => (
                        <div key={e._id} className="p-4 space-y-2 rounded-lg bg-white shadow h-full">
                            <p className="text-lg font-semibold ">{e.title ?? e.name}</p>
                            <img src={e.image} alt="menu image" className="w-full aspect-square rounded-md object-cover" />
                            <p className="text-lg font-medium text-(--primary-600)">৳ {e.price}</p>
                            <div className="flex gap-1 items-center justify-between">
                                <button onClick={() => toast.success(`${e.title ?? e.name} successfully added to cart`)} className="btn trns btn-primary rounded-md">Add to Cart</button>
                                <Link to={`/foodDetails/${e._id}`} className="italic text-sm font-medium" >View Details</Link>
                            </div>
                        </div>
                    ))
                    :
                    <p className="text-center col-span-4">No food found!</p>
                }
            </section>
        </main>
    )
}