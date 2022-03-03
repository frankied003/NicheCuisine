const admin = require('firebase-admin');

var serviceAccount = require("../service-account-credentials.json");

admin.initializeApp(serviceAccount);

const db = admin.firestore();

module.exports = { admin, db };