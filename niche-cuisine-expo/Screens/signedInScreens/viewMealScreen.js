import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button ,SectionList} from 'react-native';


export default function ViewMealScreen(props) {

    const { navigation, route } = props;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>View Meal Screen</Text>
            <Text>{route.params.data.mealName}</Text>
            <Text>Location:{route.params.data.location}</Text>
            <Text>Time:{route.params.data.time}</Text>
            <Text>Price:{route.params.data.price}</Text>
            

            {
            route.params.data.subMeals.map((subMeal) => {
                return ( 
                    <View>
                    <Text>{subMeal.type}</Text>
                    <Text>{subMeal.name}</Text>
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
    }
});