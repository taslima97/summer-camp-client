import { useForm } from "react-hook-form";
import image from '../../assets/image/font-design.jpg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = {name: data.name, email: data.email, photo: data.photo}
                        fetch('https://summer-camp-server-khaki.vercel.app/users',{
                            method:'POST',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'user create successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })

    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <img className="h-80 ml-12" src={image} alt="" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="your photo" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true, minLength: 6,
                                pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-orange-300 ">password is required</p>}
                            {errors.password?.type === 'mimLength' && <p className="text-orange-300 ">password must be 6 character</p>}
                            {errors.password?.type === 'pattern' && <p className="text-orange-300 ">Minimum eight characters, at least one letter, one number and one special character</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label>
                                <input type="password" {...register("confirm password", { required: true })} placeholder="password" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-amber-500" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p><small>Already have an account please <Link to='/login'>Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;