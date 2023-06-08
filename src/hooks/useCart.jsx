import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useCart = () => {
  const {user, loading} = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  console.log(user, loading)
 const { refetch, data: cart=[]} = useQuery({
      queryKey: ['carts', user?.email],
      // queryFn: async()=>{
      //   const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
      //     headers:{
      //      authorization : `bearer${token}` 
      //     }
      //   })
      //   return response.json()
      // }
      enabled: !!user?.email && !loading,
      queryFn: async()=>{
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        console.log('res from axios', res)
        return res.data;
      }
    })
    return [cart, refetch]
};

export default useCart;