import { useForm } from "react-hook-form";
import image from '../../assets/image/font-design.jpg'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";




const Login = () => {
    const {login} = useContext(AuthContext);
    const { register, handleSubmit, } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        console.log(data)
        login(data.email, data.password)
        .then(result=>{
          const user = result.user;
          console.log(user)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(from, {replace:true})
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
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                                <input className="btn bg-amber-500" type="submit" value="Login" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p><small>Are you new here please <Link to='/signup'>SignUp</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;