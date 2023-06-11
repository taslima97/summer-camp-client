import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";



const MyClass = () => {
  const [cart, refetch] = useCart();
  console.log(cart)

const handelDelete = info =>{
  Swal.fire({
    title: 'Are you sure want to delete?',
    
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      fetch(`http://localhost:5000/carts/${info._id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        if (data.deletedCount>0) {
          refetch();
          Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ) 
        }
      })
    }
  })
}

const handelPayment = (id) =>{
// console.log(id)
localStorage.setItem('price', id)
}


  return (
    <div className="w-full">
      
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((info, index) => <tr key={info._id} >
              <th>
                <label>
                  {index + 1}
                </label>
              </th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={info.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </td>
              <td>
                {info.Name}
              </td>
              <td>{info.email}</td>
              <td>{parseInt(info.price)}</td>
              <td>
               <Link to='/dashboard/payment'> <button onClick={()=>handelPayment(info.price)} className="btn btn-ghost btn-xs">Pay</button></Link>
              </td>
              <td>
                <button onClick={()=>handelDelete(info)} className="btn btn-ghost btn-xs">delete</button>
              </td>
            </tr>)}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default MyClass;