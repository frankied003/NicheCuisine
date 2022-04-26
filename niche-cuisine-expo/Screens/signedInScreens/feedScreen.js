import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, RefreshControl, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { getRequest } from '../../Api/api';
import MealCard from '../../Components/mealCard';

export default function FeedScreen({ navigation }) {

    const [loadingMeals, setloadingMeals] = useState(true);
    const [meals, setmeals] = useState([]);
    const [refreshing, setrefreshing] = useState(false);
    const [error, seterror] = useState(null);

    const [searchInput, setsearchInput] = useState('');

    useEffect(async () => {
        let newMeals = await getRequest('/getMeals');
        setloadingMeals(false);
        if (newMeals.length > 0) {
            setmeals(newMeals);
        }
    }, [])

    const loadMore = async () => {
        let newMeals = await getRequest('/getMeals');
        setloadingMeals(false);
        if (newMeals.length > 0) {
            setmeals(newMeals);
        }
        return newMeals;
    }

    const search = async () => {
        setrefreshing(true)
        console.log(searchInput)
        let newMeals = await loadMore();
        newMeals = newMeals.filter(function (meal) {
            return meal.mealName.startsWith(searchInput);
        });
        setmeals(newMeals)
        setrefreshing(false)

    }

    const renderItem = ({ item }) => (
        <MealCard data={item} navigation={navigation} />
    );

    return (
        <>
            {loadingMeals
                ? <ActivityIndicator size='large' style={styles.activityIndicator} />
                : (
                    <View style={styles.mainContainer}>
                        <View style={styles.searchBoxContainer}>
                            <TextInput
                                value={searchInput}
                                style={styles.searchBox}
                                onChangeText={(text) => setsearchInput(text)}
                                placeholder="Search for meal"
                            />
                            <TouchableOpacity onPress={() => search()}>
                                <Icon name='search' type='material' color='#000000' />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={() => loadMore()} />
                            }
                            data={meals}
                            renderItem={renderItem}
                            keyExtractor={meal => meal.id}
                            key={meal => meal.id}
                        />
                    </View>
                )
            }
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 6,
        marginLeft: 6,
        marginRight: 6,
        paddingBottom: 40
    },
    activityIndicator: {
        margin: 20
    },
    searchBoxContainer: {
        width: '100%',
        height: 35,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    },
    searchBox: {
        width: '90%',
        height: '100%',
        paddingLeft: 10
    }
});
