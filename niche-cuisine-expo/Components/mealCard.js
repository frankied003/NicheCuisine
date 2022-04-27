import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';

import profilePic from '../assets/profilepic.png';
import noImage from '../assets/no-image.jpg';
import Tag from './tag';

export default function MealCard(props) {
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => props.navigation.push("ViewMeal", { data: props.data })}>
            <View style={styles.topHeaderContainer}>
                <View style={styles.flexRow}>
                    <Image source={profilePic} style={styles.profileImage} />
                    <Text style={styles.profileNameText}>{props.data.userName}</Text>
                </View>
                <Text>{moment(props.data.time).utc().subtract(4, 'hours').format('MMMM Do, h:mm A')}</Text>
            </View>
            <Text style={styles.mealText}>{props.data.mealName}</Text>
            <Image source={noImage} style={styles.mainImage} />
            <View style={styles.flexBetweenRow}>
                <View style={styles.tagsContainer}>
                    {props.data.searchTags.map((tag) => {
                        return <Tag name={tag} />
                    })}
                </View>
                <Text style={styles.priceText}>${props.data.price}</Text>
            </View>
        </TouchableOpacity>
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
    tagsContainer: {
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