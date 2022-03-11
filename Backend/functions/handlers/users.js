const { db, firebase } = require('../utilities/databaseAuth');
const { isEmpty, isEmail } = require('../utilities/helperFunctions');

exports.signUp = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        fullname: req.body.fullname,
        birthday: req.body.birthday
    };

    let errors = {};

    if (isEmpty(newUser.email)) {
        errors.email = 'Email cannot be empty'
    }
    else if (!isEmail(newUser.email)) {
        errors.email = 'Not a valid email'
    }

    if (isEmpty(newUser.birthday)) {
        errors.birthday = 'Birthday cannot be empty'
    }

    if (isEmpty(newUser.password)) {
        errors.password = 'Password cannot be empty'
    }

    if (isEmpty(newUser.confirmPassword)) {
        errors.confirmPassword = 'Confirm password cannot be empty'
    }

    if (newUser.password !== newUser.confirmPassword) {
        errors.passwords = 'Passwords must match'
    }

    if (isEmpty(newUser.fullname)) {
        errors.fullname = "Name cannot be empty"
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    let token, userId;
    db.doc(`/users/${newUser.email}`).get()
        .then((doc) => {
            if (doc.exists) {
                return res.status(400).json({ email: 'User has already been created' });
            }
            else {
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then((data) => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idToken) => {
            token = idToken;
            const userCredentials = {
                fullName: newUser.fullname,
                birthday: newUser.birthday,
                bio: '',
                email: newUser.email,
                createdAt: new Date().toISOString(),
                // imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
                userId
            };
            return db
                .doc(`/users/${newUser.email}`)
                .set(userCredentials);
        })
        .then(() => {
            return res.status(201).json({ token });
        })
        .then(() => {
            var user = firebase.auth().currentUser;
            user.sendEmailVerification();
        })
        .catch((err) => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                return res.status(400).json({ email: "Email is already in use" })
            }
            else {
                return res.status(500).json({ error: err.code });
            }
        });
}