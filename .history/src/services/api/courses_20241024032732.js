import axios from 'axios';

const BASE_URL = 'https://e-learning-backend-production-8163.up.railway.app/api/courses';

const enrollInCourse = async (courseId, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/${courseId}/enroll`, {}, {
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

const fetchEnrolledCourses = async (studentId, token) => {
    try {
        const response = await axios.get(`https://e-learning-backend-production-8163.up.railway.app/api/students/${studentId}/courses`, {
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

const trackCourseProgress = async (studentId, courseId, token) => {
    try {
        const response = await axios.get(`https://e-learning-backend-production-8163.up.railway.app/api/students/${studentId}/courses/${courseId}/progress`, {
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

const fetchCourseById = async (courseId, token) => {
    try {
        const response = await axios.get(`https://e-learning-backend-production-8163.up.railway.app/api/courses/course/${courseId}`, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        if (response && response.data) {
            console.log("use response",response);
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

export { enrollInCourse, fetchEnrolledCourses, trackCourseProgress, fetchAllCourses, fetchCourseById };
