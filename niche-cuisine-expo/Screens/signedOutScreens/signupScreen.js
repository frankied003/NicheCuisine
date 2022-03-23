import { StyleSheet, Text, View, Button } from 'react-native';

// Stacks

export default function SignupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Sign up Screen!</Text>
            <Button title='Sign up - Go to feed' onPress={() => navigation.navigate("SignedInStack")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
