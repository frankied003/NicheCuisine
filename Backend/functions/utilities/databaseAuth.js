const admin = require('firebase-admin');
const firebase = require('firebase');
const config = require('../utilities/config');
var serviceAccount = require("../service-account-credentials.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
firebase.initializeApp(config)

const db = admin.firestore();

module.exports = { admin, db, firebase };