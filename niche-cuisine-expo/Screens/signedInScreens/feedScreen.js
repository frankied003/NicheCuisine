import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, RefreshControl } from 'react-native';
import { getMeals } from '../../Api/api';
import MealCard from '../../Components/mealCard';

// Components

export default function FeedScreen({ navigation }) {

    const [loadingMeals, setloadingMeals] = useState(true);
    const [meals, setmeals] = useState([]);
    const [refreshing, setrefreshing] = useState(false);
    const [error, seterror] = useState(null);

    useEffect(async () => {
        let newMeals = await getMeals();
        setloadingMeals(false);
        if (newMeals.length > 0) {
            setmeals(newMeals);
        }
    }, [])

    const loadMore = async () => {
        let newMeals = getMeals();
        setloadingMeals(false);
        if (newMeals.length > 0) {
            setmeals(newMeals);
        }
    }

    const renderItem = ({ item }) => (
        <MealCard data={item} />
    );

    return (
        <FlatList
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={loadMore} />
            }
            data={meals}
            renderItem={renderItem}
            contentContainerStyle={styles.mainContainer}
            keyExtractor={meal => meal.id}
        />
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 6,
        marginLeft: 6,
        marginRight: 6,
    },
});
