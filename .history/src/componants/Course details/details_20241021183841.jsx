import React from 'react';

const CourseDetails = () => {
    const course = {
        title: "Introduction to Programming",
        description: "Learn the basics of programming using Python.",
        instructor: "John Doe",
        duration: "10 weeks",
        price: "$199"
    };

    return (
        <div className="course-details p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-700"><strong>Description:</strong> {course.description}</p>
            <p className="text-gray-700"><strong>Instructor:</strong> {course.instructor}</p>
            <p className="text-gray-700"><strong>Duration:</strong> {course.duration}</p>
            <p className="text-gray-700"><strong>Price:</strong> {course.price}</p>
        </div>
    );
};

export default CourseDetails;
