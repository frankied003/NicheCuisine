const { db, firebase } = require('../utilities/databaseAuth');

exports.getMeals = async (req, res) => {

    try {
        let meals = []
        const mealsSnapshot = await db.collection('meals').get();
        mealsSnapshot.forEach(meal => {
            meals.push({
                name: meal.data().name,
                id: meal.id
            })
        });
        return res.json(meals)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }

}
