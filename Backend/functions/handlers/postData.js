const { db, firebase } = require('../utilities/databaseAuth');

exports.postMeal = async (req, res) => {
    let newMeal = {
        userId: req.user.userId,
        userName: req.user.fullName,
        mealName: req.body.mealName,
        time: req.body.time,
        location: req.body.location,
        price: req.body.price,
        searchTags: req.body.searchTags,
        subMeals: []
    };

    let allergens = []
    let ingredients = []

    if (req.body.appetizer) {
        const subMeal = {
            type: 'Appetizer',
            name: req.body.appetizer.name,
            image: req.body.appetizer.image,
            description: req.body.appetizer.description,
            ingredients: req.body.appetizer.ingredients,
            allergens: req.body.appetizer.allergens,
        }
        allergens = allergens.concat(req.body.appetizer.allergens)
        ingredients = ingredients.concat(req.body.appetizer.ingredients)
        newMeal.subMeals.push(subMeal)
    }
    if (req.body.entree) {
        const subMeal = {
            type: 'Entree',
            name: req.body.entree.name,
            image: req.body.entree.image,
            description: req.body.entree.description,
            ingredients: req.body.entree.ingredients,
            allergens: req.body.entree.allergens,
        }
        allergens = allergens.concat(req.body.entree.allergens)
        ingredients = ingredients.concat(req.body.entree.ingredients)
        newMeal.subMeals.push(subMeal)
    }
    if (req.body.desert) {
        const subMeal = {
            type: 'Desert',
            name: req.body.desert.name,
            image: req.body.desert.image,
            description: req.body.desert.description,
            ingredients: req.body.desert.ingredients,
            allergens: req.body.desert.allergens,
        }
        allergens = allergens.concat(req.body.desert.allergens)
        ingredients = ingredients.concat(req.body.desert.ingredients)
        newMeal.subMeals.push(subMeal)
    }

    newMeal.allergens = [...new Set(allergens)];
    newMeal.ingredients = [...new Set(ingredients)];

    db
        .collection(`meals`)
        .add(newMeal)
        .then((data) => {
            return db
                .collection('users').doc(req.user.userId).collection('meals').doc(data.id).set({ mealId: data.id });
        })
        .then(() => {
            return res.status(201).json({ 'Success': 'New meal created' });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ error: err.code });
        });
}

exports.sendInvite = async (req, res) => {
    let newInvite = {
        userId: req.user.userId,
        userName: req.user.fullName,
        mealId: req.body.mealId,
        accepted: false
    };

    const mealsSnapshot = await db.collection('meals').doc(req.body.mealId).get();
    const mealData = mealsSnapshot.data();

    newInvite.mealName = mealData.mealName;
    newInvite.chefId = mealData.userId;

    await db
        .collection(`invites`)
        .add(newInvite)
        .then((data) => {
            return db
                .collection('users').doc(newInvite.chefId).collection('invites').doc(data.id).set({ inviteId: data.id });
        })
        .then(() => {
            return res.status(201).json({ 'Success': 'Invite sent' });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ error: err.code });
        });
}

exports.acceptInvite = async (req, res) => {
    const inviteRef = db.collection('invites').doc(req.body.inviteId);
    inviteRef
        .update({ accepted: true })
        .then(() => {
            return res.status(201).json({ 'Success': 'Invite accepted' });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ error: err.code });
        });
}

exports.rejectInvite = async (req, res) => {
    const inviteRef = db.collection('invites').doc(req.body.inviteId);
    inviteRef
        .delete()
        .then(() => {
            return res.status(201).json({ 'Success': 'Invite deleted' });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ error: err.code });
        });
}


