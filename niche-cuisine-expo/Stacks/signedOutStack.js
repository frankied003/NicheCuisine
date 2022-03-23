import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen imports
import LoginScreen from '../Screens/signedOutScreens/loginScreen';
import SignupScreen from '../Screens/signedOutScreens/signupScreen';
import WelcomeScreen from '../Screens/signedOutScreens/welcomeScreen';

const SignedOStack = createNativeStackNavigator();

export default function SignedOutStack() {
    return (
        <SignedOStack.Navigator>
            <SignedOStack.Screen name="Welcome" component={WelcomeScreen} />
            <SignedOStack.Screen name="Signup" component={SignupScreen} />
            <SignedOStack.Screen name="Login" component={LoginScreen} />
        </SignedOStack.Navigator>
    );
}