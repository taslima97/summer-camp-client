

// eslint-disable-next-line react/prop-types
const Student = ({info}) => {
    console.log(info)
    // eslint-disable-next-line react/prop-types
    const {image, email, price, name} = info;
    return (
        <div className="flex space-x-4 justify-between items-center ">
         <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px] my-4" src={image} alt="" />
         
         <h3 className="uppercase">{name}----------</h3>
         <p>{email}</p>
          <p>$ {price}----------</p>
       
         
        </div>
    );
};

export default Student;