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
        backgroundColor: '#F6F4F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
