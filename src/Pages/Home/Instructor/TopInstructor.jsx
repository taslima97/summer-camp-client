

// eslint-disable-next-line react/prop-types
const TopInstructor = ({info}) => {
    // console.log(info)
    // eslint-disable-next-line react/prop-types
    const {instructorName, InstructorImg, price, Name, availableSeats, studentQuantity} = info;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={InstructorImg} alt="" className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{Name}</h2>
                <h2 className="text-2xl">{instructorName}</h2>
                <div className="flex justify-between gap-6">
                    <p className="text-xl mr-12">Enroll: {studentQuantity}</p>
                    <p className="text-xl ml-12">seats: {availableSeats}</p>
                </div>
                <div className="flex mt-4">
                    <p className="text-xl mr-12 font-bold">Price: {price}</p>
                    <div>
                        <button className="btn bg-amber-500">book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopInstructor;