import { useForm } from "react-hook-form"
import '../../Utils/form.css'
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { toast } from "react-toastify"
import { useAxios } from "../../Hooks/UseAxios"

export default function OpenRestaurantForm() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
    const { user } = useContext(AuthContext)
    const axis = useAxios()
    const formSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("image", data.logo[0]);
            const ImgRes = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_KEY}`, formData)

            if (!ImgRes?.data.data?.display_url) throw new Error("Image upload failed");
            data.owner = user?.email
            data.logo = ImgRes?.data.data?.display_url

            const res = await axis.post('/restaurants', data)
            if(!res?.data.acknowledged) toast.error("Failed to registered");
            toast.success("Successfully registered");
            reset();

        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-6 m-6 w-11/12 mx-auto">
            <h2 className="text-xl font-semibold">Register your restaurant at Dish Dash Today!</h2>
            <p className="text-sm font-medium italic text-gray-500">Note: You can only register 3 restaurant at DisDash</p>
            <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col items-center gap-3 p-8 pt-12 shadow-md/40 rounded-2xl w-11/12 md:w-3/4">
                <div className="w-full">
                    {errors.restaurantName ? <p className="text-sm text-rose-600">{errors.restaurantName.message}</p> : <label htmlFor="restaurantName">Restaurant Name :</label>}
                    <input type="text" {...register("restaurantName", { required: "restaurant name is required" })} placeholder="Enter your restaurant name" id="restaurantName" />
                </div>
                <div className="w-full">
                    {errors.restaurantEmail ? <p className="text-sm text-rose-600">{errors.restaurantEmail.message}</p> : <label htmlFor="restaurantEmail">Restaurant Email :</label>}
                    <input type="email" {...register("restaurantEmail", { required: "restaurant email is required" })} placeholder="Enter your restaurant email" id="restaurantEmail" />
                </div>
                <div className="w-full">
                    {errors.logo ? <p className="text-sm text-rose-600">{errors.logo.message}</p> : <label htmlFor="logo">Logo :</label>}
                    <input type="file" {...register("logo", { required: "logo is required" })} id="logo" />
                </div>
                <div className="w-full">
                    {errors.address ? <p className="text-sm text-rose-600">{errors.address.message}</p> : <label htmlFor="address">Address :</label>}
                    <input type="text" {...register("address", { required: "address is required" })} placeholder="Enter your restaurant address" id="address" />
                </div>
                <div className="w-full">
                    {errors.licenseNo ? <p className="text-sm text-rose-600">{errors.licenseNo.message}</p> : <label htmlFor="licenseNo">License no :</label>}
                    <input type="text" {...register("licenseNo", { required: "license No is required" })} placeholder="Enter license no" id="licenseNo" />
                </div>
                <div className="w-full">
                    {errors.phone ? <p className="text-sm text-rose-600">{errors.phone.message}</p> : <label htmlFor="phone">Phone :</label>}
                    <input type="tel" {...register("phone", { required: "phone number is required" })} placeholder="Enter restaurant phone number" id="phone" />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary trns rounded-sm shadow-md/60 ">{isSubmitting ? "Registering..." : "Register"}</button>
            </form>
        </div>
    )
}