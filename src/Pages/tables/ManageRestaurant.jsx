import { useEffect, useState } from 'react'
// import { useAxios } from '../../Hooks/UseAxios'
import '../../Utils/table.css'
import axios from 'axios'

export default function ManageRestaurant() {
    // const axis = useAxios()
    const [resData, setResData] = useState([])
    useEffect(() => {
        axios(`${import.meta.env.VITE_SERVER}/restaurants`)
            .then(res => setResData(res.data))
            .catch(err => console.error(err))
    }, [])
    console.log("resData", resData)

    return (
        <main className='w-11/12 mx-auto my-8'>
            <section className='flex flex-col items-center justify-center w-full gap-4'>
                {
                    resData?.length > 0 ?
                        resData?.map(e => (
                            <div key={e._id} className='p-4 rounded-lg bg-gray-200 w-full'>
                                <p>{e.restaurantName}</p>
                            </div>
                        ))
                        :
                        <p>No data found</p>
                }
            </section>
        </main>
    )
}