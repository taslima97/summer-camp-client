import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
// import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    
    const navigate = useNavigate();
const location = useLocation();

// eslint-disable-next-line no-unused-vars
const from = location.state?.from?.pathname || '/';
const handelGoogleSignIn = () =>{
    googleSignIn()
    .then(result=>{
        const loggedInUser = result.user;
        console.log(loggedInUser)
        const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
        fetch('https://summer-camp-server-khaki.vercel.app/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
           })
           .then(res=>res.json()) 
           .then(()=>{
           navigate(from, {replace:true});  
          
           })
        
      
    })
    
}
    return (
        <div>
            <div className="divider">OR</div>
            <div className="w-full text-center my-4">
                <button onClick={handelGoogleSignIn} className="btn btn-outline">
                   Google <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;