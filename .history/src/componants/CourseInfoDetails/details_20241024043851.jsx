import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseById, enrollInCourse } from '../../services/api/courses';
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer.jsx";

function Details() {
    const { id } = useParams();
    const [courseDetails, setCourseDetails] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getCourseDetails = async () => {
            try {
                const course = await fetchCourseById(id, token);
                console.log(course);
                setCourseDetails(course);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching course details:", err);
            }
        };

        getCourseDetails();
    }, [id]);
   

    const handleEnrollment = async (courseId) => {
        try {
            const result = await enrollInCourse(courseId, token);
            console.log('Enrollment successful:', result);
            navigate('/')
        } catch (error) {
            console.error('Enrollment failed:', error.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!courseDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <Navbar/>
            <div className="max-w-7xl mx-auto p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-2">
                        <img src={courseDetails.img} alt={courseDetails.name} className="w-full h-64 object-cover rounded-md" />
                        <div className="mt-8">
                            <h2 className="text-xl font-bold">Description</h2>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                {courseDetails.description}
                            </p>
                            <h2 className="text-xl font-bold">Objectives</h2>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-md shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Instructor’s Name</h2>
                        <p className="text-sm mb-2">{courseDetails.instructorId}</p>

                        <h2 className="text-lg font-bold mb-4">Course Name</h2>
                        <p className="text-sm mb-2">{courseDetails.name}</p>

                        <h2 className="text-lg font-bold mb-4">Course Fee</h2>
                        <p className="text-sm mb-2">${courseDetails.price}</p>

                        <h2 className="text-lg font-bold mb-4">Rating</h2>
                        <p className="text-sm mb-2">{courseDetails.rate} / 5</p>

                        <h2 className="text-lg font-bold mb-4">Available Seats</h2>
                        <p className="text-sm mb-2">{courseDetails.availableSeats}</p>

                        <h2 className="text-lg font-bold mb-4">Schedule</h2>
                        <p className="text-sm mb-2">{courseDetails.schedule}</p>
                        <button onClick={() => handleEnrollment(courseDetails._id)} className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md w-full">
                            ENROLL THE COURSE
                        </button>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="text-xl font-bold">Reviews</h2>
                    <div className="mt-4">
                        <p className="font-semibold">Provide Your Rating</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Details;
