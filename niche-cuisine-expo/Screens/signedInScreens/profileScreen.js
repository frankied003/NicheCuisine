import React from 'react';
import{Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import coverphoto from 'niche-cuisine-expo/assets/coverphoto.jpg';
import profilepic from 'niche-cuisine-expo/assets/profilepic.png';
import editProfile from 'niche-cuisine-expo/assets/editProfile.webp';
import plus from 'niche-cuisine-expo/assets/plus.png';
import { signOut, getAuth } from 'firebase/auth';
import { useAuthentication } from '../../Utils/Hooks/useAuthentication';


export default function ProfileScreen({ navigation }) {

    //const auth = getAuth();

        return (
            <View style={styles.container}>
                <Image source={coverphoto} style={styles.coverphoto} />
                {/* <View style={styles.topHeader}>
                <Image style={styles.headerIcons} source={require('niche-cuisine-expo/assets/homeicon.png')}/>
                </View> */}
                <View style={styles.dpContainer}>
                    <View style={styles.dpBlueRound}>
                        <Image
                            style={styles.dp}
                            source={profilepic}
                        />
                    </View>
                </View>

                <TextInput
                            placeholder= 'name'
                            style={styles.name}
                        />
               
                <TextInput
                            placeholder= 'bio'
                            style={styles.shortBio}
                        />

                <View style={styles.divider}></View>

                <View style={styles.aboutHeading}>
                    <Text style={styles.aboutText}>
                        About
                    </Text>
                </View>

                <View style={styles.aboutContainer}>
                    <View style={styles.abouttabContainer}>
                        <Text style={styles.font}>Age</Text>
                    </View>
                    <View style={styles.abouttabContainer}>
                        <Text style={styles.font}>Location</Text>
                    </View>
                </View>

                <View style={styles.aboutContainer}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'age'
                            style={styles.inputText}
                        />
                    </View> 
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'location'
                            style={styles.inputText}
                        />
                    </View>                 
                </View>

                <View style={styles.aboutContainer}>
                    <View style={styles.abouttabContainer}>
                        <Text style={styles.font}>Type</Text>
                    </View>
                    <View style={styles.abouttabContainer}>
                        <Text style={styles.font}>Allergies</Text>
                    </View>
                </View>

                <View style={styles.aboutContainer}>
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'type'
                            style={styles.inputText}
                        />
                    </View> 
                    <View style={styles.abouttabContainer}>
                        <TextInput
                            placeholder= 'allergies'
                            style={styles.inputText}
                        />
                    </View>                 
                </View>


                <View style={styles.profileTabsContainer}>
                    <View style={styles.tabContainer}>
                        <TouchableOpacity><Text style={styles.active}>Active Meals</Text></TouchableOpacity>
                    </View>
                    <View style={styles.tabContainer}>
                         <TouchableOpacity><Text style={styles.past}>Past Meals</Text></TouchableOpacity>
                    </View>
                    <View style={styles.tabContainer}>
                        <TouchableOpacity><Image
                            style={styles.tabImage}
                            source={editProfile}
                        /></TouchableOpacity>
                    </View>
                    <View style={styles.tabContainer}>
                        <TouchableOpacity><Image
                            style={styles.tabImage}
                            source={plus}
                        /></TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
    },
    topHeader: {
        height: 70,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerIcons: {
        height: 35,
        width: 35,
        tintColor: 'white',
    },
    coverphoto: {
        width: '100%',
        height: '25%'
    },
    dpContainer: {
        height: 200,
        width: 200,
        borderRadius: 200,
        backgroundColor: 'white',
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dpBlueRound: {
        height: '95%',
        width: '95%',
        borderRadius: 200,
        borderWidth: 5,
        borderColor: '#A68258',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dp: {
        height: 170,
        width: 170,
    },
    name: {
        alignSelf: 'center',
        marginTop: 140,
        fontWeight: 'bold',
        fontSize: 30,
    },
    shortBio: {
        alignSelf:'center',
        fontSize: 18,
        color: 'gray',
        margin: 8,
    },
    profileTabsContainer: {
        height: 50,
        backgroundColor: '#A68258',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tabContainer: {
        height: 40,
        width: 100,
        backgroundColor: '#A68258',
    },
    tabImage: {
        height: 40,
        width: 95,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'white',
    },
    past: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 11,
        fontWeight: 'bold',
        color: 'white',
    },
    active: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    divider: {
        height: 5,
        width: '95%',
        backgroundColor: "#A68258",
        marginTop: 5,
        alignSelf: 'center',
    },
    aboutHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10,
    },
    aboutText: {
        color:"#A68258", 
        fontSize: 20,
        fontWeight: 'bold',
    },
    font:{
        color: "black",
        fontSize: 18,
    },
    inputText: {
        color: "black",
        fontWeight: 'bold',
        width: 200,
        height: 20,
        fontSize: 18,
    },
    aboutContainer: {
        height: 40,
        backgroundColor: '#F6F4F1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        
    },
    abouttabContainer: {
        height: 50,
        width: 200,
        padding: 10
    },
  
});