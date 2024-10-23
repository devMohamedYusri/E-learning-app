src/components/CourseDetails/details.jsx
import React from 'react';

const CourseDetails = () => {
    // Dummy course information
    const course = {
        title: "Introduction to Programming",
        description: "Learn the basics of programming using Python.",
        instructor: "John Doe",
        duration: "10 weeks",
        price: "$199"
    };

    return (
        <div className="course-details">
            <h1>{course.title}</h1>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Price:</strong> {course.price}</p>
        </div>
    );
};

export default CourseDetails;