

import { useQuery } from "@tanstack/react-query";


const useClasses = () => {

const {data: classes = [], isLoading: loading} = useQuery({
    queryKey:['classes'],
    queryFn: async() =>{
        const res = await fetch('https://summer-camp-server-khaki.vercel.app/classes');
        return res.json();
    }
})


 return [classes, loading]
};

export default useClasses;