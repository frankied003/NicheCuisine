import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import InviteCard from '../../../Components/inviteCard';
import { getRequest } from '../../../Api/api';

export default function ActiveInvitesScreen(props) {

    const { navigation } = props;

    const [loadingInvites, setloadingInvites] = useState(true);
    const [refreshing, setrefreshing] = useState(false);

    const [invites, setinvites] = useState([]);

    useEffect(async () => {
        let invitesReq = await getRequest('/getInvites');
        setloadingInvites(false);
        if (invitesReq.length > 0) {
            setinvites(invitesReq);
        }
    }, [])

    const loadMore = async () => {
        let invitesReq = await getRequest('/getInvites');
        setloadingInvites(false);
        if (invitesReq.length > 0) {
            setinvites(invitesReq);
        }
    }

    const removeInviteFromScreen = (inviteId) => {
        const newInviteArray = invites.filter(function (invite) {
            return invite.inviteId !== inviteId;
        });
        setinvites(newInviteArray);
    }

    const renderItem = ({ item }) => (
        <InviteCard data={item} navigation={navigation} removeInviteFromScreen={removeInviteFromScreen} />
    );


    return (
        loadingInvites
            ? <ActivityIndicator size='large' style={styles.activityIndicator} />
            : (
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={() => loadMore()} />
                    }
                    data={invites}
                    renderItem={renderItem}
                    contentContainerStyle={styles.mainContainer}
                    keyExtractor={invite => invite.inviteId}
                    key={invite => invite.inviteId}
                />
            )
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 6,
        marginLeft: 6,
        marginRight: 6,
    },
    activityIndicator: {
        margin: 20
    }
});
