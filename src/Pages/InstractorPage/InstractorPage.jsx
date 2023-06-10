
// eslint-disable-next-line react/prop-types
const InstructorPage = ({info}) => {
    // eslint-disable-next-line react/prop-types
    const {photo, name, email} = info;
    return (
        <div className="flex space-x-4 justify-between items-center ">
         <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px] my-4" src={photo} alt="" />
         
         <h3 className="uppercase">{name}----------</h3>
         <p>{email}----------</p>
       
         
        </div>
    );
};

export default InstructorPage;