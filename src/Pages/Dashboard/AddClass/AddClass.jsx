import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
    // console.log(img_hosting_token)
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0],)
       
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    
                    const { Name, availableSeats, email, instructorName, price, studentQuantity,  InstructorImg} = data;
                    const allClass = { Name, availableSeats, email, instructorName, price, studentQuantity, InstructorImg,  image: imgUrl }
                    // console.log(allClass)
                    axiosSecure.post('/classes', allClass)
                        .then(data => {
                            console.log('after posting:', data.data)
                            if (data.data.insertedId) {
                                reset();
                                // todo
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Add successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                }) 
                            }
                        })
                }
            })

    }

const handelAddBtn = () =>{

}

    // console.log(img_hosting_token)
    return (
        <div>
            <h2 className="text-4xl text-center">Add a new class</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 my-24">
                <div>
                    <label>Class Name: <br /></label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="text"
                        placeholder="class name"
                        {...register("Name", { required: true })}
                    />
                </div>

                <div>
                    <label>Class Image:</label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="file"
                        placeholder=" Class image"
                        {...register("image", { required: true })}
                    />
                </div>
                <div>
                    <label>Instructor Image:</label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="file"
                        placeholder="InstructorImg "
                        {...register("InstructorImg", { required: true })}
                    />
                </div>

                <div>
                    <label>Instructor Name:</label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="text"
                        placeholder="Instructor name"
                        {...register("instructorName", { required: true })}
                    />
                </div>

                <div>
                    <label>Instructor Email:</label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="email"
                        placeholder="Your email"
                        {...register("email", { required: true })}
                    />
                </div>

                <div>
                    <label>Available Sets:</label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="text"
                        placeholder="availableSeats"
                        {...register("availableSeats", { required: true })}
                    />
                </div>
                <div>
                    <label>Enroll:</label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="text"
                        placeholder="enroll"
                        {...register("studentQuantity", { required: true })}
                    />
                </div>

                <div>
                    <label>Price: <br /></label>
                    <input className="input input-bordered my-4 w-full max-w-xs"
                        type="text"
                        placeholder="Price"
                        {...register("price", { required: true })}
                    />
                </div>

                <button onClick={()=>handelAddBtn()} className="btn  bg-amber-500 p-2 w-28">Add class</button>
            </form>
        </div>
    );
};

export default AddClass;