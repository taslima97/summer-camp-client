
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Student from "./Student";


const EnrollPage = () => {
    const {user} = useAuth();
const [enroll, setEnroll] = useState([])

useEffect(()=>{
    fetch(`http://localhost:5000/payments/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
       setEnroll(data)
    })
},[])
    return (
        <div className="w-full">
           {
            enroll.map(info=><Student key={info._id} info={info}></Student>)
           } 
        </div>
    );
};

export default EnrollPage;