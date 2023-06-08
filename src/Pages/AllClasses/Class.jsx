import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const Class = ({ info }) => {
    // eslint-disable-next-line react/prop-types
    const {_id, image, Name, price, studentQuantity, availableSeats, instructorName } = info;
const {user} = useContext(AuthContext);
const handelCart = info =>{
    console.log(info)
    if (user&& user.email) {
        const selectedInfo = {selectId:_id,image, Name, price, studentQuantity, availableSeats,instructorName, email:user.email}
        fetch('http://localhost:5000/carts',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(selectedInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
}

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{Name}</h2>
                <h2 className="text-2xl">{instructorName}</h2>
                <div className="flex justify-between gap-6">
                    <p className="text-xl mr-12">Enroll: {studentQuantity}</p>
                    <p className="text-xl ml-12">seats: {availableSeats}</p>
                </div>
                <div className="flex mt-4">
                    <p className="text-xl mr-12 font-bold">Price: {price}</p>
                    <div>
                        <Link to='/select'><button onClick={()=>handelCart(info)} className="btn bg-amber-500">select</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;