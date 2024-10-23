import Navbar from "../nav/Navbar"; // Import Navbar
import { useState } from "react"; // Import useState for state management

const MyCourses = () => {
    const myCourses = [ // Sample data for My Courses
        {
            id: 1,
            title: "Learn Laravel: A Guided Path For Beginners",
            rating: 4.2,
            reviews: 9969,
            price: 249.99,
            img: "src/assets/larave.png",
        },
        {
            id: 2,
            title: "The Complete Angular Course",
            rating: 4.4,
            reviews: 72269,
            price: 449.99,
            img: "/src/assets/angular.png",
        },
        // ... add more courses as needed
    ];

    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    const filteredCourses = myCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">My Courses</h1>
                    <p className="text-lg text-gray-600">Here are the courses you are enrolled in:</p>
                    <div className="breadcrumbs text-gray-500">
                        <a href="/" className="hover:underline">Home</a> ➔ <a href="#" className="hover:underline">My Courses</a>
                    </div>
                </div>

                <div className="flex justify-center mb-4">
                    <input
                        type="text"
                        placeholder="Search for your courses"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Filtered Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div key={course.id} className="course-card1 border rounded-lg shadow-lg p-4">
                                    <img src={course.img} alt={course.title} className="w-full h-32 object-cover rounded-md mb-2" />
                                    <h3 className="text-xl font-semibold">{course.title}</h3>
                                    <p className="text-gray-700">Rating: {course.rating} ⭐</p>
                                    <p className="text-gray-700">Reviews: {course.reviews}</p>
                                    <p className="text-lg font-bold">Price: ${course.price}</p>
                                </div>
                            ))
                        ) : (
                            <p className="txt-search text-gray-500">No courses found matching your search.</p>
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">All Courses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {myCourses.map((course) => (
                            <div key={course.id} className="course-card1 border rounded-lg shadow-lg p-4">
                                <img src={course.img} alt={course.title} className="w-full h-32 object-cover rounded-md mb-2" />
                                <h3 className="text-xl font-semibold">{course.title}</h3>
                                <p className="text-gray-700">Rating: {course.rating} ⭐</p>
                                <p className="text-gray-700">Reviews: {course.reviews}</p>
                                <p className="text-lg font-bold">Price: ${course.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyCourses;
