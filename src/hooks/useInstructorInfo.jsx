

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructorInfo = () => {
const {user, loading} = useAuth();
 const [axiosSecure] = useAxiosSecure();
  console.log(user, loading)
 const { refetch, data: instructor=[]} = useQuery({
      queryKey: ['instructor', user?.email],
      enabled: !!user?.email && !loading,
      queryFn: async()=>{
        const res = await axiosSecure('/users/instructor')
        console.log('res from axios', res)
        return res.data;
      }
    })
    return [instructor, refetch]
};

export default useInstructorInfo;