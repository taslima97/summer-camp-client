import image from '../../assets/image/abstract.jpg'

const About = () => {
    return (
        <div className='flex flex-row-reverse justify-between items-center gap-24 mt-28'>
           <img style={{height: 500}} src={image} alt="" /> 
           <div className='w-1/2'>
          <p className='text-3xl text-amber-500 font-bold my-4'> About Us</p>
          <h3 className='text-5xl font-bold my-4'>We are qualified <br /> & of experience <br /> in this field</h3>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          <button className='bg-amber-500 rounded-xl p-2 my-4'>Get More Info</button>
           </div>
        </div>
    );
};

export default About;