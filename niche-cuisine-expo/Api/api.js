import app from '../firebase';
import { getAuth } from 'firebase/auth';
var axios = require('axios');

const auth = getAuth();

const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'https://us-central1-nichecuisine-329c6.cloudfunctions.net/api'
});

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

export const getRequest = async (route, paramObject) => {
    const authToken = await checkAuthToken();
    let config = {
        headers: {
            Authorization: authToken
        },
        params: paramObject
    }
    return instance.get(route, config)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
            return error.data
        });
}

export const postRequest = async (route, params) => {
    const authToken = await checkAuthToken();
    let config = {
        headers: {
            Authorization: authToken,
            'Content-Type': 'application/json'
        }
    }
    let data = JSON.stringify(params);
    return instance.post(route, data, config)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error);
            return error.data
        });
}