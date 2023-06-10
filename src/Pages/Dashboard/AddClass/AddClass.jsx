import { useForm } from "react-hook-form";


const AddClass = () => {
    const { register, handleSubmit,} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2 className="text-4xl text-center">Add a new class</h2>
            <form  onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 my-24">
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
                        {...register("available sets", { required: true })} 
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

                <button className="btn  bg-amber-500 p-2 w-28">Add class</button>
            </form>
        </div>
    );
};

export default AddClass;