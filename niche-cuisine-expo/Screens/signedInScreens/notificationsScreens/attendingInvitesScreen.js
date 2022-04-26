import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import InviteCard from '../../../Components/inviteCard';
import { getRequest } from '../../../Api/api';

export default function AttendingInvitesScreen(props) {

    const { navigation } = props;

    const [loadingInvites, setloadingInvites] = useState(true);
    const [refreshing, setrefreshing] = useState(false);

    const [invites, setinvites] = useState([]);

    useEffect(async () => {
        let invitesReq = await getRequest('/getAttendingInvites');
        setloadingInvites(false);
        if (invitesReq.length > 0) {
            setinvites(invitesReq);
        }
    }, [])

    const renderItem = ({ item }) => (
        <InviteCard data={item} navigation={navigation} />
    );

    const loadMore = async () => {
        let invitesReq = await getRequest('/getAttendingInvites');
        setloadingInvites(false);
        if (invitesReq.length > 0) {
            setinvites(invitesReq);
        }
    }


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
