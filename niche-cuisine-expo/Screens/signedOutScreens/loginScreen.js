import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
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
                style={styles.font}
                value={email}
                onChangeText={(text) => setemail(text)}
            />
            <TextInput
                placeholder='Password'
                style={styles.font}
                value={password}
                onChangeText={(text) => setpassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.control} onPress={() => login()}><Text style={styles.fontSize}>Sign in</Text></TouchableOpacity>
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
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: "#A68258",
        width: 300,
        height: 50,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: 'red'
    },
    fontSize: {
        fontSize: 20,
        color: 'white'
    },
    font: {
        marginTop: 10,
        color: "#A68258",
        width: 300,
        height: 50,
        borderColor: "#A68258",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10

    }
});
