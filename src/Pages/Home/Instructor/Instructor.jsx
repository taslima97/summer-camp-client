import useClasses from "../../../hooks/useClasses";
import TopInstructor from "./TopInstructor";


const Instructor = () => {
    const [classes] = useClasses();
    classes.sort(function parseInt(a, b){
        return (b.availableSeats- a.availableSeats);
      })

      const slicedinfo = classes.slice(0, 6);
      console.log(slicedinfo)
    return (
       
        <div>
            <h2 className="text-4xl font-bold text-center uppercase mt-20">Top Instructor Section</h2>
            <p className="text-center mb-20">There are many variations of passages of available, but the majority <br /> have suffered alteration in some form, by injected humour</p>
           <div className="grid grid-cols-3 gap-6">
           {
            slicedinfo.map(info=><TopInstructor key={info._id} info={info}></TopInstructor>)
           } 
           </div>
        </div>
    );
};

export default Instructor;