import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import profilePic from '../assets/profilepic.png';
import { getRequest, postRequest } from '../Api/api';


export default function InviteCard(props) {

    const { navigation } = props;

    const [mealData, setmealData] = useState({});
    const [error, seterror] = useState(null);

    useEffect(async () => {
        let mealReq = await getRequest('/getMeal', { mealId: props.data.mealId });
        setmealData(mealReq)
    }, [])

    const invitationAction = async (route) => {
        seterror(null);
        let inviteReq = await postRequest(route, { inviteId: props.data.inviteId });
        if (inviteReq.Success) {
            if (route === '/acceptInvite') {
                Alert.alert(
                    "Invite Accepted",
                    "Invite has been accepted",
                    [
                        { text: "OK", onPress: props.removeInviteFromScreen(props.data.inviteId) }
                    ]
                );
            }
            else {
                Alert.alert(
                    "Invite Rejected",
                    "User will not be notified of the rejection",
                    [
                        { text: "OK", onPress: props.removeInviteFromScreen(props.data.inviteId) }
                    ]
                );
            }
        }
        else {
            seterror(inviteReq.error);
        }
    }

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
                            <Button title='Accept' onPress={() => invitationAction('/acceptInvite')} />
                            <Button title="Deny" onPress={() => invitationAction('/rejectInvite')} />
                        </View>
                    )
                }
            </View>
            <Button title='View Meal' onPress={() => navigation.push("ViewMeal", { data: mealData })} />
            {error
                ? <Text style={styles.errorText}>{error}</Text>
                : null
            }
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
        alignItems: 'center'
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
    flexBetweenRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    errorText: {
        color: 'red',
        fontSize: 15
    }
});