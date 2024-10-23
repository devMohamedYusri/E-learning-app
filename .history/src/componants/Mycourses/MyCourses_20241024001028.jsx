import Navbar from "../nav/Navbar"; 
import { useState } from "react"; 

const MyCourses = () => {
    const myCourses = [
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
    ];

    const [searchTerm, setSearchTerm] = useState(""); 

    const filteredCourses = myCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
            <h1>My Courses</h1>
            <ul>
                {myCourses.map(course => (
                    <li key={course.id}>{course.title}</li> // Display course titles
                ))}
            </ul>
        </div>
    );
};

export default MyCourses;
