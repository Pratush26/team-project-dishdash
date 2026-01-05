import { useForm } from "react-hook-form"
import { useAxios } from "../../Hooks/UseAxios"
import '../../Utils/form.css'
import axios from "axios"
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify"

export default function AddFoodModal({ setIsModalOpened, restaurantId }) {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
    const axis = useAxios()
    const formSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("image", data.image[0]);
            const ImgRes = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_KEY}`, formData)
            
            // console.log(ImgRes)
            if (!ImgRes?.data?.data?.display_url) throw new Error("Image upload failed");
            data.restaurantId = restaurantId;
            data.image = ImgRes?.data.data?.display_url
            const res = await axis.post('/menuItems', data)
            if (!res?.data.acknowledged) toast.error("Failed to registered");
            toast.success("Successfully adde food");
            reset();
        } catch (error) {
            console.error(error)
            toast.error("Failed add food!")
        }
    }
    return (
        <form onSubmit={handleSubmit(formSubmit)} className="absolute bg-white z-90 right-1/2 top-0 translate-x-1/2 flex flex-col items-center gap-3 p-10 shadow-md/40 rounded-2xl w-11/12 md:w-3/4">
            <div className="w-full flex items-center justify-between gap-2">
                <h4 className="text-xl font-bold">Add Food Item</h4>
                <button onClick={() => setIsModalOpened(false)} type="button" className="cursor-pointer">
                    <RxCross2 />
                </button>
            </div>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                    {errors.title ? <p className="text-sm text-rose-600">{errors.title.message}</p> : <label htmlFor="title">Food title :</label>}
                    <input type="text" {...register("title", { required: "title is required" })} placeholder="Enter your food title" id="title" />
                </div>
                <div className="w-full">
                    {errors.price ? <p className="text-sm text-rose-600">{errors.price.message}</p> : <label htmlFor="price">Price :</label>}
                    <input type="number" {...register("price", { required: "price is required" })} placeholder="Enter price" id="price" />
                </div>
                <div className="w-full">
                    {errors.image ? <p className="text-sm text-rose-600">{errors.image.message}</p> : <label htmlFor="image">Food Image :</label>}
                    <input type="file" {...register("image", { required: "image is required" })} id="image" />
                </div>
                <div className="w-full">
                  {errors.quantity ? <p className="text-sm text-rose-600">{errors.quantity.message}</p> : <label htmlFor="quantity">Quantity :</label>}
                  <input type="text" {...register("quantity", { required: "quantity is required" })} placeholder="Enter quantity" id="quantity" />
                </div>
                <div className="w-full">
                    {errors.description ? <p className="text-sm text-rose-600">{errors.description.message}</p> : <label htmlFor="description">Description :</label>}
                    <textarea {...register("description", { required: "description is required" })} placeholder="Enter description" id="description" />
                </div>
                <div className="w-full">
                  {errors.category ? <p className="text-sm text-rose-600">{errors.category.message}</p> : <label htmlFor="category">category :</label>}
                  <input type="text" {...register("category", { required: "category is required" })} placeholder="Enter category" id="category" />
                </div>
            </fieldset>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary trns rounded-sm shadow-md/60 ">{isSubmitting ? "Adding..." : "Add"}</button>
        </form>
    )
}