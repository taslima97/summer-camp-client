import { Link, useRouteError } from 'react-router-dom';
import image from '../../assets/image/image.png'

const ErrorPage = () => {
    
        const { error, status } = useRouteError()
    return (
       <div className="flex justify-center items-center">
        <div className='text-center mt-4 pt-4'>
            <img style={{height:'400px'}} src={image}alt="" />
            <h1 className="text-5xl font-bold">{status}</h1>
            <h3 className="text-2xl">{error?.message}</h3>
           <Link to='/'><button className="bg-amber-500 btn-outline mt-4 p-2 rounded-lg">go Homepage</button></Link> 
        </div>
        </div>
    );
   
};

export default ErrorPage;