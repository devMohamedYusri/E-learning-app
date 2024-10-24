import React, { useEffect, useState } from 'react'; // Ensure React and hooks are imported
import { fetchAllCourses } from '../../services/api/courses'; // Import the fetchAllCourses function

const MyCourses = () => {
    const [myCourses, setMyCourses] = useState([]); 
    const [error, setError] = useState(null); // State to hold error messages

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data = await fetchAllCourses(); // Call fetchAllCourses instead
                setMyCourses(data); // Set the fetched courses to state
            } catch (error) {
                console.error("Error fetching courses:", error);
                setError(error.message); // Set error message to state
            }
        };

        fetchCourses(); 
    }, []); // Empty dependency array to run once on mount

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
