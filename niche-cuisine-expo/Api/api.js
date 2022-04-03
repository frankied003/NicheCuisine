import app from '../firebase';
import { getAuth } from 'firebase/auth';
var axios = require('axios');

const auth = getAuth();

const checkAuthToken = async () => {
    try {
        const token = await auth.currentUser?.getIdToken();
        const headerToken = `Bearer ${token}`
        return headerToken;
    }
    catch (err) {
        console.log(err)
        return null;
    }
}

const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'https://us-central1-nichecuisine-329c6.cloudfunctions.net/api'
});

export const signUp = async (bodyData) => {
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let data = JSON.stringify(bodyData)
    return instance.post(`/signup`, data, config)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            console.log(err);
            return { error: err }
        });
};

export const getMeals = async (paramObject = null) => {
    const authToken = await checkAuthToken();
    let config = paramObject ? {
        headers: {
            Authorization: authToken,
            params: paramObject
        }
    } : {
        headers: {
            Authorization: authToken,
        }
    }
    return instance.get(`/getMeals`, config)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
            return error.data
        });
}

export const postMeal = async (params) => {
    const authToken = await checkAuthToken();
    let config = {
        headers: {
            Authorization: authToken,
            'Content-Type': 'application/json'
        }
    }
    let data = JSON.stringify(params);
    return instance.post(`/getMeals`, data, config)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
            return error.data
        });
}
