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

    firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(async (data) => {
            userId = data.user.uid;
            const userCredentials = {
                fullName: newUser.fullname,
                birthday: newUser.birthday,
                bio: '',
                email: newUser.email,
                createdAt: new Date().toISOString(),
                userId: userId,
                imageUrl: `none`,
                userId: userId
            };
            await db.doc(`/users/${userId}`).set(userCredentials);
            return data.user.getIdToken();
        })
        .then((token) => {
            return res.status(201).json({ token });
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

exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    let errors = {};

    if (isEmpty(user.email)) {
        errors.email = 'Email cannot be empty'
    }
    else if (!isEmail(user.email)) {
        errors.email = 'Not a valid email'
    }

    if (isEmpty(user.password)) {
        errors.password = 'Password cannot be empty'
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            return data.user.getIdToken();
        })
        .then((token) => {
            return res.json({ token })
        })
        .catch((err) => {
            console.error(err);
            if (err.code === 'auth/wrong-password') {
                return res.status(403).json({ login: 'Wrong password, please try again' });
            }
            else if (err.code === 'auth/user-not-found') {
                return res.status(403).json({ login: 'No account is associated with that email address, please try again' });
            }
            else {
                return res.status(400).json({ error: err.code });
            }
        });
}