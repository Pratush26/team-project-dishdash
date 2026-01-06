import { useEffect, useState } from "react"
import { useAxios } from "../Hooks/UseAxios"
import { useParams } from "react-router"
import Loader from "../Components/Shared/Loader"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { addToCart } from "../features/cartSlice"

export default function FoodDetail() {
    const { id } = useParams()
    const axis = useAxios()
    const [resData, setResData] = useState({})
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axis(`/menuItems/${id}`)
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
    
    const handleAddToCart = (d) => {
            dispatch(
                addToCart({
                    foodId: d._id,
                    foodName: d.title
                })
            );
            toast.success(`${d.title} successfully added to cart`)
        };

    return (
        <main className="w-11/12 mx-auto my-6">
           <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Image Section */}
        <div className="w-full h-72 md:h-full">
          <img
            src={resData?.image}
            alt={resData?.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-10 flex flex-col justify-between">
          <div>
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-orange-100 text-orange-600">
              {resData?.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {resData?.title}
            </h1>

            <p className="text-gray-600 mb-4">
              {resData?.description}
            </p>

            <div className="flex items-center gap-6 mb-6">
              <p className="text-2xl font-bold text-(--primary-500)">
                ৳ {resData?.price}
              </p>
              <span className="text-sm text-gray-500">
                Quantity: <span className="font-medium">{resData?.quantity}</span>
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
               onClick={() => handleAddToCart({ _id: resData?._id, title: resData?.title ?? resData?.name })} 
              className="btn btn-out text-(--primary-500) trns rounded-md"
            >
              Add to Cart
            </button>

            <button
              onClick={() => toast.success(`${resData?.title ?? resData.name} successfully ordered`)}
              className="btn btn-primary text-(--primary-500) trns rounded-md"
            >
              Buy Now
            </button>
          </div>

          {/* Cart Info */}
          {/* {cartCount > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              Items in cart: <span className="font-semibold">{cartCount}</span>
            </p>
          )} */}
        </div>
      </div>
        </main>
    )
}