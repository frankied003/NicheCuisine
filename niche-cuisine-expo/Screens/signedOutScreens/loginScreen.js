import { StyleSheet, Text, View, Button } from 'react-native';

// Stacks

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login Screen!</Text>
            <Button title='Sign up - Go to feed' onPress={() => navigation.navigate("SignedInStack")} />
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
