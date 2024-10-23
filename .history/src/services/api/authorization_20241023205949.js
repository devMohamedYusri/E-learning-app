import axios from 'axios';

const registerUser = async (userData) => {
    try {
        const response = await axios.post('https://e-learning-backend-production-8163.up.railway.app/api/users/auth/register', userData);

        
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

const loginUser = async (loginData) => {
    try {
        const response = await axios.post('https://e-learning-backend-production-8163.up.railway.app/api/users/auth/login', loginData);

        
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

export { registerUser, loginUser }; // Combined export statement
