import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import MealCard from './mealCard';

import profilePic from '../assets/profilepic.png';
import noImage from '../assets/no-image.jpg';
let data = {
    "userName": "Frank DiGiacomo",
    "userId": "UbNCHYsBpyVrr1LEIc8s6wYhfWJ3",
    "mealName": "Italian Stalion",
    "time": 1649832218,
    "location": "806 castle point terrace",
    "price": "35.99",
    "searchTags": [
        "Italian",
        "Pasta",
        "Red Sauce"
    ],
    "subMeals": [
        {
            "description": "Fish sticks with dipping sauce",
            "ingredients": [
                "Wheat",
                "Fish"
            ],
            "image": "none",
            "allergens": [
                "Gluten",
                "Milk",
                "Fish"
            ],
            "name": "Fish Sticks",
            "type": "Appetizer"
        },
        {
            "name": "Pasta bowl",
            "image": "none",
            "type": "Entree",
            "allergens": [
                "Gluten",
                "Milk"
            ],
            "ingredients": [
                "Wheat",
                "Milk",
                "Butter"
            ],
            "description": "Pasta bowl with dipping sauce"
        },
        {
            "name": "Lava Cake",
            "image": "none",
            "type": "Desert",
            "allergens": [
                "Gluten",
                "Milk",
                "Eggs"
            ],
            "ingredients": [
                "Wheat",
                "Milk",
                "Eggs"
            ],
            "description": "So good, would eat for breakfast lunch and dinner"
        }
    ],
    "id": "AiQvaaoHq4ZJB7bPsUTV"
}

export default function InviteCard(props) {
    return (
        <View style={styles.cardContainer}>
            
            <MealCard data={data}/>
            <View style={styles.flexBetweenRow}>
                <View style={styles.buttonsContainer}>
                <   Button variant="contained">Accept</Button>
                <   Button variant="contained">Decline</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        height: 'auto',
        padding: 10
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    profileImage: {
        width: 40,
        height: 40,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 20,
    },
    profileNameText: {
        marginLeft: 5,
        fontSize: 13,
        fontWeight: '600'
    },
    mealText: {
        fontSize: 20,
        fontWeight: '600'
    },
    mainImage: {
        width: '100%',
        height: 250
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '80%'
    },
    flexBetweenRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});