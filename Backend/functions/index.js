// packages
const functions = require('firebase-functions');
const express = require('express');

// const authRequired = require('./utilities/authMiddleware');

const { getMeals } = require('./handlers/getData');

const app = express();

// get requests
app.get('/getMeals', getMeals);

// example for auth, just put in the authRequired as the middleware
// app.get('/getLikes', authRequired, getMeals);

exports.api = functions.https.onRequest(app);
