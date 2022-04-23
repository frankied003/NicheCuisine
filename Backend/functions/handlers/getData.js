const { db, firebase } = require('../utilities/databaseAuth');

exports.getMeals = async (req, res) => {

    try {
        let meals = []
        const mealsSnapshot = await db.collection('meals').get();
        mealsSnapshot.forEach(meal => {
            meals.push({
                name: meal.data()?.name,
                userName: meal.data()?.userName,
                userId: meal.data()?.userId,
                mealName: meal.data()?.mealName,
                time: meal.data()?.time,
                location: meal.data()?.location,
                price: meal.data()?.price,
                searchTags: meal.data()?.searchTags,
                subMeals: meal.data()?.subMeals,
                id: meal.id
            })
        });
        return res.json(meals)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }

}

exports.getAcceptedInvites = async (req, res) => {

    try {
        let invites = []
        const inviteSnapshot = await db.collection('invites').where('chefId', '==', req.user.userId).where('accepted', '==', true).get();
        inviteSnapshot.forEach(invite => {
            invites.push({
                userId: invite.data()?.userId,
                userName: invite.data()?.userName,
                mealId: invite.data()?.mealId,
                mealName: invite.data()?.mealName,
                accepted: invite.data()?.accepted,
                inviteId: invite.id
            })
        });
        return res.json(invites)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }

}

exports.getInvites = async (req, res) => {

    try {
        let invites = []
        const inviteSnapshot = await db.collection('invites').where('chefId', '==', req.user.userId).where('accepted', '==', false).get();
        inviteSnapshot.forEach(invite => {
            invites.push({
                userId: invite.data()?.userId,
                userName: invite.data()?.userName,
                mealId: invite.data()?.mealId,
                mealName: invite.data()?.mealName,
                accepted: invite.data()?.accepted,
                inviteId: invite.id
            })
        });
        return res.json(invites)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }

}

exports.checkInviteForMeal = async (req, res) => {

    const mealId = req.query.mealId;

    console.log(mealId);
    console.log(req.user.userId);

    try {
        const inviteSnapshot = await db.collection('invites').where('mealId', '==', mealId).where('userId', '==', req.user.userId).get();
        if (inviteSnapshot.exists) {
            return res.json({ 'Success': true })
        }
        else {
            return res.json({ 'error': false })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }

}

