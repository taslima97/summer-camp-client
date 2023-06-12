import admin from '../../../assets/image/image3.jpg'
const AdminHome = () => {

    return (
        <div>

           <h2 className="text-4xl font-bold text-center uppercase">Welcome to Admin home</h2> 
           <img style={{height: 600}} src={admin} alt="" />
        </div>
    );
};

export default AdminHome;