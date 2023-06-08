

import useClasses from "../../hooks/useClasses";

import Class from "./Class";


const AllClasses = () => {
    const [classes] = useClasses();
    // classes.sort(function parseInt(a, b){
    //   return (b.studentQuantity- a.studentQuantity);
    // })
    // console.log(classes)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
        classes.map(info=><Class key={info._id} info={info}></Class>,)
      }
        </div>
    );
};

export default AllClasses;