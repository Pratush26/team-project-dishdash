import { useEffect, useState } from "react"
import { useAxios } from "../Hooks/UseAxios"
import { useParams } from "react-router"
import Loader from "../Components/Shared/Loader"

export default function FoodDetail() {
    const { id } = useParams()
    const axis = useAxios()
    const [resData, setResData] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axis(`/menuItems/restaurant/${id}`)
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
    console.log(resData)
    return (
     <main>

     </main>   
    )
}