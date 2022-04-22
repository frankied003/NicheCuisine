import React from 'react';
import moment from 'moment';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button ,SectionList} from 'react-native';

// import profilePic from '../assets/profilepic.png';
// import noImage from '../assets/no-image.jpg';
// import Tag from '../tag';

export default function ViewMealScreen(props) {

    const { navigation, route } = props;

    return (
        <ScrollView contentContainerStyle={styles.container}>
             <Image source={require('niche-cuisine-expo/assets/no-image.jpg')} style={styles.mainImage} />
            <Text style = {styles.mealTitle}>{route.params.data.mealName}</Text>
            <View style = {styles.topHeaderContainer}> 
            <Image source={require('niche-cuisine-expo/assets/profilepic.png')} style={styles.profileImage} />
            <View>
            <Text style ={styles.profileNameText}>Host: {route.params.data.userName}</Text>
            <Text style ={styles.profileNameText}>Location: {route.params.data.location}</Text>
            <Text style ={styles.profileNameText}>Time: {moment.unix(route.params.data.time).format('MMMM Do, h:mm A')}</Text>
            <Text style ={styles.profileNameText}>Price: ${route.params.data.price}</Text>
            </View>
            </View>
            
            
            

            {
            route.params.data.subMeals.map((subMeal) => {
                return ( 
                    <View style = {styles.smc}>
                    <Text style = {styles.title}>{subMeal.type}:<Text style = {styles.subT}>{subMeal.name}</Text></Text>
                    <Text>Description: {subMeal.description}</Text>
                    <Text>Ingredients: {subMeal.ingredients.map((ingredent)=> {return(<Text>{ingredent} </Text>);})}</Text>
                    <Text>Allergiens: {subMeal.allergens.map((allergen)=> {return(<Text>{allergen} </Text>);})}</Text>
                   </View>                
        );
            })}
           
        </ScrollView>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
    },
    smc:{
        borderWidth: 2,
        borderColor: '#A68258',

    },
    title:{
        fontWeight:'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    mainImage: {
        width: '100%',
        height: 250
    },
    profileNameText: {
        marginLeft: 5,
        fontSize: 13,
        fontWeight: '600'
    },
    subT:{
        fontSize: 15,
        fontWeight: 'normal',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 20,
    },
    mealTitle:{
        fontWeight:'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    topHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    
});