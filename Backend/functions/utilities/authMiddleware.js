const { db, admin } = require('../utilities/databaseAuth');
const firebase = require('firebase');

module.exports = (req, res, next) => {
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        idToken = req.headers.authorization.split('Bearer ')[1];
    }
    else {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    admin.auth().verifyIdToken(idToken)
        .then((decodedToken) => {
            req.user = decodedToken;
            return db.collection('users')
                .where('userId', '==', req.user.uid)
                .limit(1)
                .get();
        })
        .then((data) => {
            req.user.userHandle = data.docs[0].data().userHandle;
            req.user.userId = data.docs[0].data().userId;
            req.user.imageUrl = data.docs[0].data().imageUrl;
            return next();
        })
        .catch((err) => {
            let errors = {};
            if (err.code === 'auth/argument-error') {
                errors.auth = 'Unauthorized, wrong token';
            }
            else if (err.code === 'auth/id-token-expired') {
                errors.auth = 'Unauthorized, token expired';
            }
            console.error(errors);
            return res.status(403).json(errors);
        });
}