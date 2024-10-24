import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getInstructorCourses, deleteCourse } from "../services/api/InstructorCourses.js";
import CourseCard from "../componants/CourseCard.jsx";
import "../App.css";

const InstructorPage = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const instructor = JSON.parse(localStorage.getItem('user'));

    // Load courses on component mount
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const fetchedCourses = await getInstructorCourses(instructor._id);
                setCourses(fetchedCourses);
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            }
        };

        fetchCourses();
    }, [instructor]);

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

    const handleLogout = () => {
        const token = localStorage.getItem('token');
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        if (token) {
            const logoutAPI = async () => {
                try {
                    const response = await fetch('https://e-learning-backend-production-8163.up.railway.app/auth/logout', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Failed to logout');
                    }

                    console.log('Logged out successfully');
                } catch (error) {
                    console.error('Error logging out:', error.message);
                }
            };

            logoutAPI();
        } else {
            console.error('No token found, unable to logout');
        }
        navigate('/login');
    };

    return (
        <div className="instructor-page">
            <header className="dashboard-header">
                <div className="logo-section">
                    <h1 className="title-platform">EDYOUVOYAGE</h1>
                </div>
                <div className="instructor-info">
                    <span className="instructor-name">Instructor: {instructor.name}</span>
                    <button
                        className="logout-btn"
                        onClick={handleLogout}>
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

            <div className="courses-container">
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
