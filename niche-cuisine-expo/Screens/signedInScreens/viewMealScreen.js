import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';


export default function ViewMealScreen(props) {

    const { navigation, route } = props;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>View Meal Screen</Text>
            <Text>{route.params.data.mealName}</Text>
        </ScrollView>

    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
    }
});