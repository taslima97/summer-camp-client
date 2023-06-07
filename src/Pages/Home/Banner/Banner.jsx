
import image1 from '../../../assets/image/img1.png'
import image2 from '../../../assets/image/image2.jpg'
import image3 from '../../../assets/image/image3.jpg'
import image4 from '../../../assets/image/image4jpg.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img style={{ height: 600 }} src={image1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#7f7777] to-[rgba(21, 21, 21, 0)]">
          <div className='text-white space-y-7 mx-auto  ml-24 w-96'>
            <h3 className='text-6xl font-bold '>It is good
              tea time at The Tea House</h3>
            <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
            <div>
              <button className="btn bg-amber-500">Show more</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2  left-10 right-10 top-1/2 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img style={{ height: 600 }} src={image2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#7f7777] to-[rgba(21, 21, 21, 0)]">
          <div className='text-white space-y-7 mx-auto  ml-24 w-96'>
            <h3 className='text-6xl font-bold '>It is good
              tea time at The Tea House</h3>
            <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
            <div>
              <button className="btn bg-amber-500">Show more</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2  left-10 right-10 top-1/2 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img style={{ height: 600 }} src={image3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#7f7777] to-[rgba(21, 21, 21, 0)]">
          <div className='text-white space-y-7 mx-auto  ml-24 w-96'>
            <h3 className='text-6xl font-bold '>It is good
              tea time at The Tea House</h3>
            <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
            <div>
              <button className="btn bg-amber-500">Show more</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2  left-10 right-10 top-1/2 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img style={{ height: 600 }} src={image4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 bottom-0 bg-gradient-to-r from-[#7f7777] to-[rgba(21, 21, 21, 0)]">
          <div className='text-white space-y-7 mx-auto  ml-24 w-96'>
            <h3 className='text-6xl font-bold '>It is good
              tea time at The Tea House</h3>
            <p>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
            <div>
              <button className="btn bg-amber-500">Show more</button>

            </div>
          </div>
        </div>
        <div className="absolute flex justify-between items-center transform -translate-y-1/2  left-10 right-10 top-1/2 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
      
      
      
    </div>
  );
};

export default Banner;