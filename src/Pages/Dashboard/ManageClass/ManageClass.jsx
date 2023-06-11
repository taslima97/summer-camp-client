import useClasses from "../../../hooks/useClasses";
import Manage from "./manage";


const ManageClass = () => {
    const [classes] = useClasses();
    console.log(classes)
    return (
        <div className=" grid md:grid-cols-2 w-full">
            {
               classes.map(info=><Manage key={info._id} info={info}></Manage>)
            }

        </div>
    );
};

export default ManageClass;