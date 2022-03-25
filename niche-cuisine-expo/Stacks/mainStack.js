import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Authentication
import { useAuthentication } from '../Utils/Hooks/useAuthentication';

// Stack imports
import SignedInStack from './signedInStack';
import SignedOutStack from './signedOutStack';

export default function MainStack() {
    const { user } = useAuthentication();

    return user
        ? (
            <SignedInStack />
        )
        : (
            <SignedOutStack />
        )
}