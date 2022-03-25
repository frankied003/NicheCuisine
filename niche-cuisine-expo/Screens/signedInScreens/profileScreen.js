import { Button, StyleSheet, Text, View } from 'react-native';
import { signOut, getAuth } from 'firebase/auth';
import { useAuthentication } from '../../Utils/Hooks/useAuthentication';

// Components

export default function ProfileScreen({ navigation }) {

    const auth = getAuth();

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button title="Sign Out" onPress={() => signOut(auth)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
