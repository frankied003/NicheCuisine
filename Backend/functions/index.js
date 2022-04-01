// packages
const functions = require('firebase-functions');
const express = require('express');

const authRequired = require('./utilities/authMiddleware');

const { getMeals } = require('./handlers/getData');
const { signUp, login } = require('./handlers/users');
const { postMeal } = require('./handlers/postData');

const app = express();

// get requests
app.get('/getMeals', authRequired, getMeals);

// post requests
app.post('/postMeal', authRequired, postMeal);

// user creation / auth
app.post('/signup', signUp);
app.post('/login', login);

exports.api = functions.https.onRequest(app);
