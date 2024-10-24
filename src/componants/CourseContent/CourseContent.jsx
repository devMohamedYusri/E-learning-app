import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Sidebar from './Sidebar';
import LessonContent from './LessonContent';

function CourseContent() {
    const [selectedLesson, setSelectedLesson] = useState('Lesson 1');

    const lessons = [
        'Lesson 1: Introduction',
        'Lesson 2: Basics',
        'Lesson 3: Advanced Concepts',
        'Lesson 4: Practical Applications',
    ];

    return (
        <>
            <div className="flex h-screen">
            <Sidebar lessons={lessons} setSelectedLesson={setSelectedLesson} />
            <div className="flex-1 p-6 bg-gray-100">
                <LessonContent lesson={selectedLesson} />
                <Link to="/my-courses" className="mt-4 p-2 bg-blue-500 text-white rounded">Back to My Courses</Link> {/* Link to go back */}
            </div>
        </div>
        </>
    );
}

export default CourseContent;
