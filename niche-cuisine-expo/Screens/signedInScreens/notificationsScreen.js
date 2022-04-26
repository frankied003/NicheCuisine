import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveInvitesScreen from './notificationsScreens/activeInvitesScreen';
import AcceptedInvitesScreen from './notificationsScreens/acceptedInvitesScreen';

// Components

export default function NotificationScreen({ navigation }) {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={styles.container}>
            <Tab.Navigator
                style={styles.tabContainer}
                screenOptions={{
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "black",
                    tabBarPressOpacity: .9,
                    tabBarIndicatorStyle: {
                        backgroundColor: "#A68258",
                        height: "100%"
                    },

                }}
            >
                <Tab.Screen
                    name="Invites"
                    children={() =>
                        <ActiveInvitesScreen navigation={navigation} />
                    }
                />
                <Tab.Screen
                    name="Accepted"
                    children={() =>
                        <AcceptedInvitesScreen navigation={navigation} />
                    }
                />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10,
        textAlign: 'center'
    },
    tabContainer: {
        width: '100%',
    },
});
