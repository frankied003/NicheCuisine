import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default function LoginScreen({ navigation }) {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');

    // temporary function --> will be converted to API call
    async function login() {
        if (email === '' || password === '') {
            seterror("Email and password must not be empty");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            seterror(err.message)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder='Email'
                style={styles.control}
                value={email}
                onChangeText={(text) => setemail(text)}
            />
            <TextInput
                placeholder='Password'
                style={styles.control}
                value={password}
                onChangeText={(text) => setpassword(text)}
                secureTextEntry={true}
            />
            <Button title="Sign in" style={styles.control} onPress={() => login()} />
            {error
                ? <Text>{error}</Text>
                : null
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controls: {
        flex: 1,
    },
    control: {
        marginTop: 10
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: 'red'
    }
});
