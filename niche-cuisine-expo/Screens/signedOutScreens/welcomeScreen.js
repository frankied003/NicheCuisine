import { Button, StyleSheet, Text, View } from 'react-native';

// Stacks

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Welcome Screen!</Text>
            <Button title='Login' onPress={() => navigation.navigate("Login")} />
            <Button title='Signup' onPress={() => navigation.navigate("Signup")} />
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
