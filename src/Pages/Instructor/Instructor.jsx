import useInstructorInfo from "../../hooks/useInstructorInfo";
import InstructorPage from "../InstractorPage/InstractorPage";


const Instructor = () => {
  const [instructor] = useInstructorInfo();
  console.log(instructor)
  return (
    <div>
      <h2 className="text-4xl font-bold  text-center my-8"> All Instructor</h2>
      <div className="grid md:grid-cols-2 ">
      {
        instructor.map(info => <InstructorPage key={info._id} info={info}></InstructorPage>)
      }
      </div>
    </div>
  );
};

export default Instructor;