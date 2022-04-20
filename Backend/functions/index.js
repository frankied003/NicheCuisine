// packages
const functions = require('firebase-functions');
const express = require('express');

const authRequired = require('./utilities/authMiddleware');

const { getMeals, getAcceptedInvites, getInvites } = require('./handlers/getData');
const { signUp, login } = require('./handlers/users');
const { postMeal, sendInvite, acceptInvite, rejectInvite } = require('./handlers/postData');

const app = express();

// get requests
app.get('/getMeals', authRequired, getMeals);
app.get('/getAcceptedInvites', authRequired, getAcceptedInvites);
app.get('/getInvites', authRequired, getInvites);

// post requests
app.post('/postMeal', authRequired, postMeal);
app.post('/sendInvite', authRequired, sendInvite);
app.post('/acceptInvite', authRequired, acceptInvite);
app.post('/rejectInvite', authRequired, rejectInvite);

// user creation / auth
app.post('/signup', signUp);
app.post('/login', login);

exports.api = functions.https.onRequest(app);
