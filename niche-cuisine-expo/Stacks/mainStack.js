import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Stack imports
import SignedInStack from './signedInStack';
import SignedOutStack from './signedOutStack';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignedOutStack"
                component={SignedOutStack}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SignedInStack"
                component={SignedInStack}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}