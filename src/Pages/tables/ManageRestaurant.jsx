import { useContext, useEffect, useState } from 'react'
import { useAxios } from '../../Hooks/UseAxios'
import '../../Utils/table.css'
import { Link } from 'react-router'
import Loader from '../../Components/Shared/Loader'
import { UserContext } from '../../Context/AuthContext'

export default function ManageRestaurant() {
    const axis = useAxios()
    const { user } = useContext(UserContext)
    const [resData, setResData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axis(`/restaurants/owner/${user?.email}`)
                setResData(res.data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [axis, user])
    return (
        <main className='w-11/12 mx-auto my-8'>
            <section className='flex flex-col items-center justify-center w-full gap-4'>
                {
                    loading ?
                        <div className="w-full flex items-center justify-center min-h-[50vh]">
                            <Loader />
                        </div>
                        :
                        resData?.length > 0 ?
                            resData?.map(e => (
                                <div key={e._id} className='p-4 rounded-lg bg-gray-200 w-full'>
                                    <Link to={`/restaurant/${e._id}`}>{e.restaurantName}</Link>
                                </div>
                            ))
                            :
                            <p>No data found</p>
                }
            </section>
        </main>
    )
}