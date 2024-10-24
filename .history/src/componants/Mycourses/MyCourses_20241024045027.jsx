import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar"; 
import { useState, useEffect } from "react"; 
import { fetchEnrolledCourses } from "../../services/api/courses";

const MyCourses = () => {
    const [myCourses, setMyCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    console.log(myCourses);
    useEffect(() => {
        const studentId = JSON.parse(localStorage.getItem('user'))._id;
        const token = localStorage.getItem('token');

        const getCourses = async () => {
            try {
                const courses = await fetchEnrolledCourses(studentId, token);
                setMyCourses(courses); 
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        getCourses();
    }, []);

    const filteredCourses = myCourses.filter((course) =>
        course.name && course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">My Courses</h1>
                    <p className="text-lg text-gray-600">Here are the courses you are enrolled in:</p>
                    <div className="breadcrumbs text-gray-500">
                        <a href="/" className="hover:underline">Home</a> ➔ <a href="#" className="hover:underline">My Courses</a>
                    </div>
                </div>

                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search for your courses"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 w-1/2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {searchTerm && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Filtered Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((course) => (
                                    <div key={course._id} className="course-card border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                                        <img src={course.img} alt={course.name} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-gray-800"><a href={`/course/details/${course._id}`} className="text-blue-500 hover:text-blue-700">{course.name}</a></h3>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Filtered Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div key={course._id} className="course-card border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                                    <img src={course.img} alt={course.name} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                                        <p className="text-gray-600">Rating: {course.rate} ⭐</p>
                                        <p className="text-gray-600">Price: ${course.price}</p>
                                        <p className="text-lg font-bold text-gray-800">Category: {course.category}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="txt-search text-red-500">No courses found matching your search.</p>
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">All Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myCourses.map((course) => (
                            <div key={course._id} className="course-card border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                                <img src={course.img} alt={course.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                                    <p className="text-gray-600">Rating: {course.rate} ⭐</p>
                                    <p className="text-gray-600">Price: ${course.price}</p>
                                    <p className="text-lg font-bold text-gray-800">Category: {course.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MyCourses;
