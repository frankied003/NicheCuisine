import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import profilePic from '../assets/profilepic.png';
import { getRequest } from '../Api/api';


export default function InviteCard(props) {

    const { navigation } = props;

    const [mealData, setmealData] = useState({});

    useEffect(async () => {
        let mealReq = await getRequest('/getMeal', { mealId: props.data.mealId });
        setmealData(mealReq)
    }, [])


    return (
        <View style={styles.cardContainer}>
            <View style={styles.topHeaderContainer}>
                <View style={styles.flexRow}>
                    <Image source={profilePic} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileNameText}>{props.data.userName}</Text>
                        <Text style={styles.profileNameText}>Meal: {props.data.mealName}</Text>
                    </View>
                </View>
                {props.data.accepted
                    ? null
                    : (
                        <View>
                            <Button title='Accept' />
                            <Button title="Deny" />
                        </View>
                    )
                }
            </View>
            <Button title='View Meal' onPress={() => navigation.push("ViewMeal", { data: mealData })} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
        backgroundColor: '#ffffff',
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