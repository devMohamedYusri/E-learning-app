import Navbar from "../nav/Navbar";
import image from "../../assets/"
function Details() {
    const courseInfo = {
        trainerName: "George Mathews",
        courseFee: "$230",
        availableSeats: 15,
        schedule: "2.00 pm to 4.00 pm",
        objectives: [
            "When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts...",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        ],
        reviews: [
            { label: "Quality", rating: 3 },
            { label: "Punctuality", rating: 4 },
            { label: "Quality", rating: 4 }
        ]
    };

    return (
        <>
        <Navbar/>
        <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <img src={image} alt="Course" className="w-full h-64 object-cover rounded-md" />
                    <div className="mt-8">
                        <h2 className="text-xl font-bold">Objectives</h2>
                        {courseInfo.objectives.map((objective, index) => (
                            <p key={index} className="mt-4 text-gray-700 leading-relaxed">
                                {objective}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-md shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Trainer’s Name</h2>
                    <p className="text-sm mb-2">{courseInfo.trainerName}</p>

                    <h2 className="text-lg font-bold mb-4">Course Fee</h2>
                    <p className="text-sm mb-2">{courseInfo.courseFee}</p>

                    <h2 className="text-lg font-bold mb-4">Available Seats</h2>
                    <p className="text-sm mb-2">{courseInfo.availableSeats}</p>

                    <h2 className="text-lg font-bold mb-4">Schedule</h2>
                    <p className="text-sm mb-2">{courseInfo.schedule}</p>
                    <button className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md w-full">
                        ENROLL THE COURSE
                    </button>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="text-xl font-bold">Reviews</h2>
                <div className="mt-4">
                    <p className="font-semibold">Provide Your Rating</p>

                    {courseInfo.reviews.map((review, index) => (
                        <div className="flex items-center mt-2" key={index}>
                            <span className="text-gray-500 mr-4">{review.label}</span>
                            <div className="flex">
                                <StarRating rating={review.rating} />
                            </div>
                            <span className="ml-4">Outstanding</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

const StarRating = ({ rating }) => {
    return (
        <>
            {Array(5)
                .fill()
                .map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={index < rating ? "orange" : "gray"}
                        className="w-6 h-6">
                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
        </>
    );
};

export default Details;
