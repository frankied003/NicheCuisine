import React, { useState, useEffect } from 'react';
import {
    Text, View, StyleSheet, Platform, TextInput,
    TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen({ navigation }) {

    const [fullName, setFullName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthday, setBirthday] = useState('234589732');
    const [validSubmit, setvalidSubmit] = useState(false);

    const checkInputs = () => {
        if (fullName && email && password && confirmPassword && birthday) {
            setvalidSubmit(true);
        }
    }

    const handleEmailChange = (text) => {
        setemail(text);
        checkInputs();
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={styles.inner}>
                    <SafeAreaView>
                        <View style={styles.aboutHeading}>
                            <Text style={styles.aboutText}>
                                Welcome to Niche Cuisine
                            </Text>
                        </View>
                        <Text style={styles.shortBio}>Create your profile below. Tell us about yourself and soon you will discover and create delicious meals!</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Full Name</Text>
                            <TextInput
                                placeholder='Full name'
                                onChangeText={(text) => setFullName(text)}
                                style={styles.inputText}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Email</Text>
                            <TextInput
                                placeholder='Email'
                                style={styles.inputText}
                            />
                        </View>
                        {/* <View style={styles.aboutContainer3}>
                    <View style={styles.tabContainer}>
                        <TextInput
                            placeholder='Date of Birth'
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.aboutContainer3}>
                        <TouchableOpacity><Image
                            style={styles.tabImage}
                            source={calendar}
                        /></TouchableOpacity>
                    </View>
                </View> */}
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput
                                placeholder='Password'
                                style={styles.inputText}
                                keyboardType='visible-password'
                                textContentType='password'
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Confirm Password</Text>
                            <TextInput
                                placeholder='Confirm Password'
                                style={styles.inputText}
                                keyboardType='visible-password'
                                textContentType='password'
                            />
                        </View>
                        <View style={styles.divider} />
                        <Text style={styles.categoryTitle}>Meal Preferences</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Food Categories</Text>
                            <TextInput
                                placeholder='Italian, Mexican, etc.'
                                style={styles.inputText}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Allergies</Text>
                            <TextInput
                                placeholder='Milk, Peanuts, etc.'
                                style={styles.inputText}
                            />
                        </View>
                        <TouchableOpacity style={styles.control}>
                            <Text style={styles.fontSize}>Create</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    inner: {
        flex: 1,
    },
    aboutHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    aboutText: {
        color: "#A68258",
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        margin: 10
    },
    shortBio: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'gray',
        margin: 8,
    },
    divider: {
        height: 5,
        width: '100%',
        borderRadius: 5,
        backgroundColor: "#A68258",
        marginTop: 5,
        alignSelf: 'center',
    },
    inputTitle: {
        fontSize: 18,
    },
    categoryTitle: {
        margin: 10,
        marginBottom: 0,
        fontSize: 24,
    },
    inputText: {
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 20
    },
    control: {
        alignSelf: 'center',
        backgroundColor: "#A68258",
        width: 300,
        height: 60,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 5,
        padding: 15,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fontSize: {
        fontSize: 20,
        color: 'white'
    },
    tabImage: {
        height: 40,
        width: 110,
        backgroundColor: 'black',

    },
    tabContainer: {
        height: 20,
        width: 300,
        padding: 5,
    },
});