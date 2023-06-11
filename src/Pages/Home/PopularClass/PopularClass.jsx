import useClasses from "../../../hooks/useClasses";
import Popular from "./Popular";


const PopularClass = () => {
  const [classes] = useClasses();
  classes.sort(function parseInt(a, b) {
    return (b.studentQuantity - a.studentQuantity);
  })

  const slicedinfo = classes.slice(0, 6);
  console.log(slicedinfo)
  return (

    <div>
      <h2 className=" text-center text-4xl font-bold uppercase mt-20">Top Enroll class</h2>
      <p className="text-center mb-20">There are many variations of passages of available, but the majority <br /> have suffered alteration in some form, by injected humour</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          slicedinfo.map(info => <Popular key={info._id} info={info}></Popular>)
        }
      </div>
    </div>
  );
};

export default PopularClass;