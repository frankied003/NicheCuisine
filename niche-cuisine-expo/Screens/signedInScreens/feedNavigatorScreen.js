import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import FeedScreen from './feedScreen';
import SearchScreen from './searchScreen';
import ProfileScreen from './profileScreen';
import CreateMealScreen from "./createMealScreen";

const Tab = createBottomTabNavigator();

export default function FeedNavigatorScreen({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Create" component={CreateMealScreen} />
        </Tab.Navigator>
    );
}
