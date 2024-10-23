import axios from 'axios';

const API_URL = 'https://e-learning-backend-production-8163.up.railway.app/api';

// All Courses
export const getAllCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}/courses/All`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all courses:', error);
        throw error;
    }
};

// Adding A New Course
export const addCourse = async (courseData) => {
    try {
        const response = await axios.post(`${API_URL}/courses/add`, courseData);
        return response.data;
    } catch (error) {
        console.error('Error adding new course:', error);
        throw error;
    }
};

// Get Specific Course
export const getCourseById = async (courseId) => {
    try {
        const response = await axios.get(`${API_URL}/courses/course/${courseId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching course ${courseId}:`, error);
        throw error;
    }
};

// Update A Course
export const updateCourse = async (courseId, courseData) => {
    try {
        const response = await axios.put(`${API_URL}/courses/update/${courseId}`, courseData);
        return response.data;
    } catch (error) {
        console.error(`Error updating course ${courseId}:`, error);
        throw error;
    }
};

// Delete A Course
export const deleteCourse = async (courseId) => {
    try {
        const response = await axios.delete(`${API_URL}/courses/delete/${courseId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting course ${courseId}:`, error);
        throw error;
    }
};

// Get Instructor's Courses
export const getInstructorCourses = async (instructorId) => {
    try {
        const response = await axios.get(`${API_URL}/courses/instructors/${instructorId}/courses`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching instructor ${instructorId}'s courses:`, error);
        throw error;
    }
};
