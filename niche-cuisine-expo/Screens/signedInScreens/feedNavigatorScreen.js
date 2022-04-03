import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Screens
import FeedScreen from './feedScreen';
import CreateScreen from './createScreen';
import ProfileScreen from './profileScreen';
import NotificationsScreen from './notificationsScreen';

const Tab = createBottomTabNavigator();

export default function FeedNavigatorScreen({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = 'question';
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    }
                    else if (route.name === 'Create') {
                        iconName = focused ? 'food-drumstick' : 'food-drumstick-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    // You can return any component that you like here
                    return <Icon name={iconName} type='material-community' color='#000000' />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 11
                }
            }}
        >
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Create" component={CreateScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </ Tab.Navigator>
    );
}
