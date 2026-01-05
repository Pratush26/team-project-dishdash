import { useParams } from "react-router"
import { useAxios } from "../Hooks/UseAxios"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Context/AuthContext"
import AddFoodModal from "../Components/Modals/AddFood"
import Loader from "../Components/Shared/Loader"

export default function Restaurant() {
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const axis = useAxios()
    const [resData, setResData] = useState([])
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axis(`/restaurants/${id}`)
                setResData(res.data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [axis, id])
    if (loading) {
        return (
            <div className="w-full flex items-center justify-center min-h-[50vh]">
                <Loader />
            </div>
        )
    }
    return (
        <main className="w-11/12 mx-auto my-10 relative">
            {isModalOpened && <AddFoodModal setIsModalOpened={setIsModalOpened} restaurantId={resData?._id} />}
            <section className="flex items-center gap-2">
                <img src={resData?.logo} alt="logo" className="w-20 aspect-square object-cover rounded-full" />
                <h1 className="text-2xl font-bold">{resData?.restaurantName}</h1>
            </section>
            {resData?.owner === user?.email && <button onClick={() => setIsModalOpened(true)} className="btn btn-primary rounded-lg my-2 trns">Add Food</button>}
            <section className="space-y-2 my-5 bg-white rounded-xl p-5">
                <span className="flex gap-1">
                    <p className="font-semibold">Email: </p>{resData?.restaurantEmail}
                </span>
                <span className="flex gap-1">
                    <p className="font-semibold">Phone: </p>{resData?.phone}
                </span>
                <span className="flex gap-1">
                    <p className="font-semibold">Address: </p>{resData?.address}
                </span>
            </section>
        </main>
    )
}