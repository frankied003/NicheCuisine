import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen imports
import FeedNavigatorScreen from '../Screens/signedInScreens/feedNavigatorScreen';

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
        </SignedStack.Navigator>
    );
}