// packages
const functions = require('firebase-functions');
const express = require('express');

const authRequired = require('./utilities/authMiddleware');

const { getMeals, getHostingInvites, getInvites, checkInviteForMeal, getMeal, getAttendingInvites } = require('./handlers/getData');
const { signUp, login } = require('./handlers/users');
const { postMeal, sendInvite, acceptInvite, rejectInvite } = require('./handlers/postData');

const app = express();

// get requests
app.get('/getMeals', authRequired, getMeals);
app.get('/getHostingInvites', authRequired, getHostingInvites);
app.get('/getAttendingInvites', authRequired, getAttendingInvites);
app.get('/getInvites', authRequired, getInvites);
app.get('/getMeal', authRequired, getMeal);
app.get('/checkInviteForMeal', authRequired, checkInviteForMeal);

// post requests
app.post('/postMeal', authRequired, postMeal);
app.post('/sendInvite', authRequired, sendInvite);
app.post('/acceptInvite', authRequired, acceptInvite);
app.post('/rejectInvite', authRequired, rejectInvite);

// user creation / auth
app.post('/signup', signUp);
app.post('/login', login);

exports.api = functions.https.onRequest(app);
