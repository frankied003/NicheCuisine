// export default function SignupScreen({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text>Sign up Screen!</Text>
//             <Button title='Sign up - Go to feed' onPress={() => navigation.navigate("SignedInStack")} />
//         </View>
//     );
// }


import React from 'react';
import{Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import calendar from 'niche-cuisine-expo/assets/calendar.png';

export default function SignUpScreen({ navigation }) {
    return(
        
        <View style={styles.container}>
            
                <View style={styles.aboutHeading}>
                    <Text style={styles.aboutText}>
                        Welcome to Niche Cuisine
                    </Text>
                </View>

                <View>
                    <Text style={styles.shortBio}>Create your profile below.  Tell us about yourself and soon you will discover and create delicious meals!</Text>
                </View>

                <View style={styles.aboutContainer}>
                <View style={styles.abouttabContainer}>
                    <Text style={styles.font}>First Name</Text>
                </View>
                </View>
                <View style={styles.aboutContainer2}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'first name'
                            style={styles.inputText}
                        />
                    </View>
                </View>

                <View style={styles.aboutContainer}>
                <View style={styles.abouttabContainer}>
                    <Text style={styles.font}>Last Name</Text>
                </View>
                </View>
                <View style={styles.aboutContainer2}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'last name'
                            style={styles.inputText}
                        />
                    </View>
                </View>

                <View style={styles.aboutContainer3}>
                    <View style={styles.tabContainer}>
                        <TextInput
                            placeholder= 'Date of Birth'
                            style={styles.inputText}
                        />
                    </View>
                    <View style={styles.aboutContainer3}>
                        <TouchableOpacity><Image
                            style={styles.tabImage}
                            source={calendar}
                        /></TouchableOpacity>
                    </View>   
                </View>

                <View style={styles.aboutContainer}>
                <View style={styles.abouttabContainer}>
                    <Text style={styles.font}>Password</Text>
                </View>
                </View>
                <View style={styles.aboutContainer2}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'password'
                            style={styles.inputText}
                        />
                    </View>
                </View>

                <View style={styles.aboutContainer}>
                <View style={styles.abouttabContainer}>
                    <Text style={styles.font}>Confirm Password</Text>
                </View>
                </View>
                <View style={styles.aboutContainer2}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'password'
                            style={styles.inputText}
                        />
                    </View>
                </View>
                
                <View style={styles.aboutContainer}>
                <View style={styles.abouttabContainer}>
                    <Text style={styles.fontTitle}>Meal Preferences</Text>
                </View>
                </View>

                <View style={styles.aboutContainer}>
                <View style={styles.abouttabContainer}>
                    <Text style={styles.font}>Search Types of food</Text>
                </View>
                </View>
                <View style={styles.aboutContainer2}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'search'
                            style={styles.inputText}
                        />
                    </View>
                </View>

                <View style={styles.aboutContainer}>
                <View style={styles.abouttabContainer}>
                    <Text style={styles.font}>Any Allergies?</Text>
                </View>
                </View>
                <View style={styles.aboutContainer2}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'allergies'
                            style={styles.inputText}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.control}><Text style={styles.fontSize}>Publish</Text></TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
        marginTop: 60
    },
    aboutHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    aboutText: {
        color:"#A68258", 
        fontSize: 32,
        fontWeight: 'bold',
    },
    aboutContainer: {
        height: 40,
        backgroundColor: '#F6F4F1',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,       
        marginTop: 20, 
    },
    aboutContainer2: {
        height: 20,
        backgroundColor: '#F6F4F1',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,        
    },
    aboutContainer3: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10  
    },
    abouttabContainer: {
        height: 80,
        width: 300,
        padding: 10
    },
    abouttabContainer2: {
        height: 40,
        width: 300,
        padding: 10
    },
    shortBio: {
        alignSelf:'center',
        fontSize: 18,
        color: 'gray',
        margin: 8,
    },
    font:{
        marginTop: 3,
        color: "black",
        fontSize: 20,
    },
    fontTitle:{
        marginTop: 10,
        color: "black",
        fontSize: 30,
    },
    inputText: {
        color: "black",
        fontWeight: 'bold',
        width: 200,
        height: 20,
        fontSize: 18,
    },
    control: {
        alignItems: 'center',
        backgroundColor: "#A68258",
        width: 300,
        height: 60,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 5,
        padding: 15,
        marginLeft: 65,
        marginTop: 15
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