import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { getRequest, postRequest } from '../../Api/api';

export default function ViewMealScreen(props) {

    const { navigation, route } = props;

    const [invitePresent, setinvitePresent] = useState(false);
    const [checkingInvite, setcheckingInvite] = useState(true);

    const [quantity, setquantity] = useState('1');
    const [sendingInvite, setsendingInvite] = useState(false);
    const [inviteSentSuccessfully, setinviteSentSuccessfully] = useState(false);
    const [error, seterror] = useState(null);

    useEffect(async () => {
        setcheckingInvite(true)
        let invitePresentReq = await getRequest('/checkInviteForMeal', { mealId: route.params.data.id });
        console.log(invitePresentReq)
        if (invitePresentReq.present) {
            setinvitePresent(true)
        }
        else {
            setinvitePresent(false)
        }
        setcheckingInvite(false);
    }, [])

    const onInterestedButtonPress = async () => {
        seterror(null);
        const createdInvite = {
            quantity: quantity,
            mealId: route.params.data.id
        }
        setsendingInvite(true);
        let sendingInviteReq = await postRequest('/sendInvite', createdInvite);
        console.log(sendingInviteReq)
        if (sendingInviteReq.Success) {
            setinviteSentSuccessfully(true)
            setTimeout(() => {
                navigation.goBack()
            }, 1000);
        }
        else {
            seterror("Error sending interested notification to chef");
        }
        setsendingInvite(false);
    }


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
                {checkingInvite
                    ? <View>
                        <ActivityIndicator />
                    </View>
                    : !invitePresent
                        ? (
                            <View style={styles.spaceBetweenRow}>
                                <View style={styles.row}>
                                    <Text style={styles.profileNameText}>Guests</Text>
                                    <TextInput
                                        value='1'
                                        style={styles.textInput}
                                        onChangeText={(text) => setquantity(text)}
                                    />
                                </View>
                                <TouchableOpacity style={styles.button} onPress={() => onInterestedButtonPress()}>{sendingInvite
                                    ? <ActivityIndicator />
                                    : inviteSentSuccessfully
                                        ? <Text style={styles.fontSize}>Sent</Text>
                                        : <Text style={styles.fontSize}>Interested</Text>
                                }</TouchableOpacity>
                            </View>
                        )
                        : <TouchableOpacity style={[styles.button, { opacity: .5, alignSelf: 'center' }]} disabled>
                            <Text style={styles.fontSize}>Sent</Text>
                        </TouchableOpacity>
                }
                <Text>{error}</Text>
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
        width: '100%',
        padding: 10
    },
    spaceBetweenRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    textInput: {
        fontSize: 18,
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 2,
        width: 25,
        textAlign: 'center',
        marginHorizontal: 10
    },
    button: {
        backgroundColor: "#A68258",
        borderRadius: 5,
        width: 150,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center'
    },
    fontSize: {
        fontSize: 20,
        color: '#fff'
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