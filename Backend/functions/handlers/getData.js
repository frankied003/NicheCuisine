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
