import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen imports
import FeedNavigatorScreen from '../Screens/signedInScreens/feedNavigatorScreen';
import ViewMealScreen from '../Screens/signedInScreens/viewMealScreen';

const SignedStack = createNativeStackNavigator();

export default function SignedInStack() {
    return (
        <SignedStack.Navigator>
            <SignedStack.Screen
                name="Feed"
                component={FeedNavigatorScreen}
                options={{
                    headerShown: false
                }}
            />
            <SignedStack.Screen
                name="ViewMeal"
                component={ViewMealScreen}
                options={{

                }}
            />
        </SignedStack.Navigator>
    );
}