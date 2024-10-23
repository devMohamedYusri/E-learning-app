import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getInstructorCourses, deleteCourse } from "../services/api/courses.js";
import CourseCard from "../componants/CourseCard.jsx";
import "../App.css";

const InstructorPage = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const instructorId = 1;

    // Load courses on component mount
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const fetchedCourses = await getInstructorCourses(instructorId);
                setCourses(fetchedCourses);
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            }
        };

        fetchCourses();
    }, [instructorId]);

    // Add New Course
    const handleAddCourse = () => {
        navigate("/add-course");
    };

    // Delete
    const handleDeleteCourse = async (courseId) => {
        try {
            await deleteCourse(courseId);
            setCourses(courses.filter((course) => course.id !== courseId));
        } catch (error) {
            console.error("Failed to delete course:", error);
        }
    };

    // Edit
    const handleEditCourse = (courseId) => {
        navigate(`/edit-course/${courseId}`);
    };

    return (
        <div className="instructor-page">
            <header className="dashboard-header">
                <div className="logo-section">
                    <h1 className="title-platform">EDYOUVOYAGE</h1>
                </div>
                <div className="instructor-info">
                    <span className="instructor-name">Instructor: John Doe</span>
                    <button
                        className="logout-btn"
                        onClick={() => {
                            /* Logout function */
                        }}
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="title-button">
                <h1>Instructor Dashboard</h1>
                <button className="add-course-button" onClick={handleAddCourse}>
                    Add New Course
                </button>
            </div>
            <h2 className="subtitle-share">Share your knowledge with us!</h2>
            
            <div  className="courses-container">
                {courses.length === 0 ? (
                    <p>No courses added yet!</p>
                ) : (
                    <ul className="course-list">
                        {courses.map((course) => (
                            <li key={course.id}>
                                <CourseCard
                                    course={course}
                                    onDelete={handleDeleteCourse}
                                    onEdit={handleEditCourse}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default InstructorPage;
