import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppetizerScreen from './createMealTabScreens/appetizerScreen';
import EntreeScreen from './createMealTabScreens/entreeScreen';
import DesertScreen from './createMealTabScreens/desertScreen';
import { postRequest } from '../../Api/api';

export default function CreateMealScreen({ navigation }) {

    const meal = {
        "mealName": "",
        "time": 0,
        "location": "",
        "price": "",
        "searchTags": [],
        "appetizer": {
            "name": "",
            "image": "",
            "description": "",
            "ingredients": [],
            "allergens": []
        },
        "entree": {
            "name": "",
            "image": "",
            "description": "",
            "ingredients": [],
            "allergens": []
        },
        "desert": {
            "name": "",
            "image": "",
            "description": "",
            "ingredients": [],
            "allergens": []
        }
    };

    const Tab = createMaterialTopTabNavigator();

    const [mealName, setmealName] = useState('');
    const [date, setdate] = useState(new Date());
    const [price, setprice] = useState('');
    const [tags, settags] = useState('');

    // appetizer
    const [appetizerName, setappetizerName] = useState('');
    const [appetizerDescription, setappetizerDescription] = useState('');
    const [appetizerIngredients, setappetizerIngredients] = useState('');
    const [appetizerAllergies, setappetizerAllergies] = useState('');

    // entree
    const [entreeName, setentreeName] = useState('');
    const [entreeDescription, setentreeDescription] = useState('');
    const [entreeIngredients, setentreeIngredients] = useState('');
    const [entreeAllergies, setentreeAllergies] = useState('');

    // desert
    const [desertName, setdesertName] = useState('');
    const [desertDescription, setdesertDescription] = useState('');
    const [desertIngredients, setdesertIngredients] = useState('');
    const [desertAllergies, setdesertAllergies] = useState('');

    const [error, seterror] = useState(null);
    const [validSubmit, setvalidSubmit] = useState(false);
    const [submitting, setsubmitting] = useState(false);

    // datetime picker stuff - should make a seperate component
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setdate(new Date());
    };

    const checkInputs = () => {
        seterror(null);
        if (mealName.length >= 1
            && price.length >= 1) {
            setvalidSubmit(true);
        }
        else {
            setvalidSubmit(false);
        }
    }

    const handleMealNameChange = (text) => {
        setmealName(text);
        checkInputs();
    }

    const handlePriceChange = (price) => {
        setprice(price);
        checkInputs();
    }

    const createMeal = async () => {
        setsubmitting(true);
        const createdMeal = {
            "mealName": mealName,
            "time": date,
            "location": "806 castle point terrace",
            "price": price,
            "searchTags": ["Italian", "Sub", "Sandwich"]
        }
        if (appetizerName.length > 1) {
            createdMeal.appetizer = {
                "name": appetizerName,
                "image": 'N/A',
                "description": appetizerDescription,
                "ingredients": appetizerIngredients.split(","),
                "allergens": appetizerAllergies
            }
        }
        if (entreeName.length > 1) {
            createdMeal.entree = {
                "name": entreeName,
                "image": "N/A",
                "description": entreeDescription,
                "ingredients": entreeIngredients.split(","),
                "allergens": entreeAllergies
            }
        }
        if (desertName.length > 1) {
            createdMeal.desert = {
                "name": desertName,
                "image": "N/A",
                "description": desertDescription,
                "ingredients": desertIngredients.split(","),
                "allergens": desertAllergies
            }
        }
        console.log(createdMeal)
        const postMealreq = await postRequest('/postMeal', createdMeal);
        console.log(postMealreq)
        if (postMealreq.Success) {
            setmealName('');
            setprice('');
            setdate('');
            setappetizerName('');
            setappetizerDescription('');
            setappetizerIngredients('');
            setappetizerAllergies();
            setentreeName('');
            setentreeDescription('');
            setentreeIngredients('');
            setentreeAllergies('');
            setdesertName('');
            setdesertDescription('');
            setdesertIngredients('');
            setdesertAllergies('');
            navigation.goBack();
        }
        else {
            seterror("Error posting meal")
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.spaceBetweenRow}>
                <TextInput
                    placeholder='Meal Name'
                    style={styles.nameInput}
                    onChangeText={(text) => handleMealNameChange(text)}
                />
                <TextInput
                    placeholder='$Price'
                    style={styles.priceInput}
                    keyboardType='numbers-and-punctuation'
                    onChangeText={(price) => handlePriceChange(price)}
                />
            </View>
            {/* <Text>{appetizerName}</Text> */}
            <Tab.Navigator
                style={styles.tabContainer}
                screenOptions={{
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "black",
                    tabBarPressOpacity: .9,
                    tabBarIndicatorStyle: {
                        backgroundColor: "#A68258",
                        height: "100%"
                    },

                }}
            >
                <Tab.Screen
                    name="Appetizer"
                    children={() =>
                        <AppetizerScreen
                            handleAppetizerNameChange={(text) => setappetizerName(text)}
                            handleAppetizerDescriptionChange={(text) => setappetizerDescription(text)}
                            handleAppetizerIngredientsChange={(text) => setappetizerIngredients(text)}
                            handleAppetizerAllergies={(allergies) => setappetizerAllergies(allergies)}
                        />
                    }
                />
                <Tab.Screen
                    name="Entree"
                    children={() =>
                        <EntreeScreen
                            handleEntreeNameChange={(text) => setentreeName(text)}
                            handleEntreeDescriptionChange={(text) => setentreeDescription(text)}
                            handleEntreeIngredientsChange={(text) => setentreeIngredients(text)}
                            handleEntreeAllergies={(allergies) => setentreeAllergies(allergies)}
                        />
                    }
                />
                <Tab.Screen
                    name="Desert"
                    children={() =>
                        <DesertScreen
                            handleDesertNameChange={(text) => setdesertName(text)}
                            handleDesertDescriptionChange={(text) => setdesertDescription(text)}
                            handleDesertIngredientsChange={(text) => setdesertIngredients(text)}
                            handleDesertAllergies={(allergies) => setdesertAllergies(allergies)}
                        />
                    }
                />
            </Tab.Navigator>
            <View style={styles.footerContainer}>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    style={styles.dateContainer}
                    minuteInterval={10}
                    mode={'datetime'}
                    onChange={onChange}
                />
                <TouchableOpacity
                    style={[styles.submitButton, validSubmit ? null : { opacity: .5 }]}
                    onPress={() => createMeal()}
                    disabled={!validSubmit}
                >
                    {submitting
                        ? <ActivityIndicator />
                        : <Text style={styles.fontSize}>Create</Text>
                    }
                </TouchableOpacity>
            </View>
            <Text>{error}</Text>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10,
        textAlign: 'center'
    },
    nameInput: {
        width: '70%',
        height: 30,
        fontSize: 18,
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 2,
        marginBottom: 5
    },
    priceInput: {
        width: '20%',
        height: 30,
        fontSize: 18,
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 2,
        marginBottom: 5
    },
    tabContainer: {
        width: '100%',
    },
    spaceBetweenRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    submitButton: {
        alignSelf: 'center',
        backgroundColor: "#A68258",
        width: 200,
        height: 60,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 5,
        padding: 15,
        opacity: 1,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fontSize: {
        fontSize: 20,
        color: 'white'
    },
    footerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateContainer: {
        flex: 1
    }
});

