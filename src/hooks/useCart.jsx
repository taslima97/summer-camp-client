import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useCart = () => {
  const {user, loading} = useAuth();
 const [axiosSecure] = useAxiosSecure();
  console.log(user, loading)
 const { refetch, data: cart=[]} = useQuery({
      queryKey: ['carts', user?.email],
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