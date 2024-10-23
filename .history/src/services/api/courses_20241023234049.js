import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://e-learning-backend-production-8163.up.railway.app/api/courses';

// Function to fetch all courses
const fetchAllCourses = async () => {
    try {
        const response = await axios.get(BASE_URL);
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

// Function to fetch user's courses (My Courses)
const fetchMyCourses = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/my-courses`, {
            headers: {
                Authorization: `Bearer ${token}`, 
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

export { fetchAllCourses, fetchMyCourses };

