import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://e-learning-backend-production-8163.up.railway.app/api/courses';

// Function to enroll in a course
const enrollInCourse = async (courseId, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/${courseId}/enroll`, {}, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token for authentication
            },
        });
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error("No data returned from server");
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'An error occurred on the server');
        } else if (error.request) {
            throw new Error('No response received from the server');
        } else {
            throw new Error(error.message || 'An unknown error occurred');
        }
    }
};

// Function to view enrolled courses for a student
const fetchEnrolledCourses = async (studentId, token) => {
    try {
        const response = await axios.get(`https://e-learning-backend-production-8163.up.railway.app/api/students/${studentId}/courses`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token for authentication
            },
        });
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error("No data returned from server");
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'An error occurred on the server');
        } else if (error.request) {
            throw new Error('No response received from the server');
        } else {
            throw new Error(error.message || 'An unknown error occurred');
        }
    }
};

// Function to track progress in a specific course
const trackCourseProgress = async (studentId, courseId, token) => {
    try {
        const response = await axios.get(`https://e-learning-backend-production-8163.up.railway.app/api/students/${studentId}/courses/${courseId}/progress`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token for authentication
            },
        });
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error("No data returned from server");
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'An error occurred on the server');
        } else if (error.request) {
            throw new Error('No response received from the server');
        } else {
            throw new Error(error.message || 'An unknown error occurred');
        }
    }
};

// Function to fetch all courses (if needed)
const fetchAllCourses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/All`);
        if (response && response.data) {
            return response.data;
        } else {
            throw new Error("No data returned from server");
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'An error occurred on the server');
        } else if (error.request) {
            throw new Error('No response received from the server');
        } else {
            throw new Error(error.message || 'An unknown error occurred');
        }
    }
};

export { enrollInCourse, fetchEnrolledCourses, trackCourseProgress, fetchAllCourses };
