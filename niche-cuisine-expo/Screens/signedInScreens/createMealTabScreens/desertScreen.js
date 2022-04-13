import { useState, useEffect } from 'react';
import {
    ScrollView, StyleSheet, Text, TextInput, View,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform
} from 'react-native';
import { Icon } from 'react-native-elements';
import SelectibleTag from '../../../Components/selectibleTag';

// Components

const allergensArray = [
    "Dairy", "Eggs", "Fish", "Shellfish", "Peanuts",
    "Wheat", "Beef", "Soy", "Tree Nuts", "Fruit"
]

export default function AppetizerScreen(props) {

    const [selectedAllergens, setselectedAllergens] = useState([]);

    const changeSelectedAllergens = (tag) => {
        if (selectedAllergens.includes(tag)) {
            setselectedAllergens(selectedAllergens.filter(tagName => tag !== tagName))
        }
        else {
            const updatedSelectedAllergens = [
                ...selectedAllergens,
                tag
            ]
            setselectedAllergens(updatedSelectedAllergens)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.flexRow}>
                        <Text style={styles.title}>Desert - </Text>
                        <TextInput
                            placeholder='Title'
                            style={styles.titleInput}
                            onChangeText={(text) => handleMealNameChange(text)}
                        />
                        <Icon name='camera' type='material-community' color='#000000' />
                    </View>
                    <Text style={styles.subTitle}>Description</Text>
                    <TextInput
                        placeholder='This desert is composed of...'
                        multiline={true}
                        style={styles.largeInput}
                        onChangeText={(text) => handleMealNameChange(text)}
                    />
                    <Text style={styles.subTitle}>Ingredients</Text>
                    <TextInput
                        placeholder='Wheat, Milk, Eggs, etc...'
                        multiline={true}
                        style={styles.largeInput}
                        onChangeText={(text) => handleMealNameChange(text)}
                    />
                    <Text style={styles.subTitle}>Allergens</Text>
                    <View style={styles.flexBox}>
                        {allergensArray.map((tag) => (
                            <SelectibleTag name={tag} selected={selectedAllergens.includes(tag)} onClick={() => changeSelectedAllergens(tag)} />
                        ))}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1'
    },
    flexRow: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18
    },
    titleInput: {
        fontSize: 18,
        backgroundColor: '#fff',
        padding: 5,
        paddingHorizontal: 10,
        width: '60%',
        borderRadius: 20,
        marginRight: 10
    },
    largeInput: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 10,
        marginTop: 5,
        borderRadius: 10,
        fontSize: 16,
    },
    subTitle: {
        fontSize: 16,
        marginTop: 10
    },
    flexBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 100,
        flexWrap: 'wrap'
    }
});
