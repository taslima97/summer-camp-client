import img from '../../../assets/image/kids-discussing-homework-reading-books.jpg'

const UserHome = () => {
    return (
        <div>

        <h2 className="text-4xl font-bold text-center uppercase">Welcome to student home</h2> 
        <img style={{height: 600}} src={img} alt="" />
     </div>
    );
};

export default UserHome;