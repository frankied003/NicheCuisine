import React, { useEffect } from 'react';
import moment from 'moment';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button, SectionList } from 'react-native';
import { sendInvite } from '../../Api/api';

export default function ViewMealScreen(props) {

    const { navigation, route } = props;

    useEffect(async () => {
        let newMeals = await getMeals();
        setloadingMeals(false);
        if (newMeals.length > 0) {
            setmeals(newMeals);
        }
    }, [])


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('niche-cuisine-expo/assets/no-image.jpg')} style={styles.mainImage} />
            <View style={styles.textContent}>
                <Text style={styles.mealTitle}>{route.params.data.mealName}</Text>
                <View style={styles.topHeaderContainer}>
                    <Image source={require('niche-cuisine-expo/assets/profilepic.png')} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileNameText}>Host: {route.params.data.userName}</Text>
                        <Text style={styles.profileNameText}>Location: {route.params.data.location}</Text>
                        <Text style={styles.profileNameText}>Time: {moment.unix(route.params.data.time).format('MMMM Do, h:mm A')}</Text>
                        <Text style={styles.profileNameText}>Price: ${route.params.data.price}</Text>
                    </View>
                </View>

                {
                    route.params.data.subMeals.map((subMeal) => {
                        return (
                            <View style={styles.smc}>
                                <Text style={styles.title}>{subMeal.type}: <Text style={styles.subT}>{subMeal.name}</Text></Text>
                                <Text>Description: {subMeal.description}</Text>
                                <Text>Ingredients: {subMeal.ingredients.map((ingredent) => { return (<Text>{ingredent}, </Text>); })}</Text>
                                <Text>Allergiens: {subMeal.allergens.map((allergen) => { return (<Text>{allergen}, </Text>); })}</Text>
                            </View>
                        );
                    })}
            </View>

        </ScrollView>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
    },
    textContent: {
        padding: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    mainImage: {
        width: '100%',
        height: 250
    },
    profileNameText: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '600'
    },
    smc: {
        marginBottom: 10,
    },
    subT: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    profileImage: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    mealTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    topHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

});