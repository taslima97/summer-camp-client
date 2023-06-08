import useClasses from "../../../hooks/useClasses";
import Popular from "./Popular";


const PopularClass = () => {
    const [classes] = useClasses();
    classes.sort(function parseInt(a, b){
        return (b.studentQuantity- a.studentQuantity);
      })

      const slicedinfo = classes.slice(0, 3);
      console.log(slicedinfo)
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
        slicedinfo.map(info=><Popular key={info._id} info={info}></Popular>)
      }
        </div> 
        </div>
    );
};

export default PopularClass;