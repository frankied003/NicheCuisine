import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppetizerScreen from './createMealTabScreens/appetizerScreen';
import EntreeScreen from './createMealTabScreens/entreeScreen';
import DesertScreen from './createMealTabScreens/desertScreen';

// export default function CreateMealScreen({ navigation }) {
//     const meal = {
//         "mealName": "",
//         "time": 0,
//         "location": "",
//         "price": "",
//         "searchTags": [],
//         "appetizer": {
//             "name": "",
//             "image": "",
//             "description": "",
//             "ingredients": [],
//             "allergens": []
//         },
//         "entree": {
//             "name": "",
//             "image": "",
//             "description": "",
//             "ingredients": [],
//             "allergens": []
//         },
//         "desert": {
//             "name": "",
//             "image": "",
//             "description": "",
//             "ingredients": [],
//             "allergens": []
//         }
//     };
//     const currentName = "";
//     const currentImage = "";
//     const currentDescription = "";
//     const currentIngredients = [];
//     const currentAllergens = [];
//     const [error, seterror] = useState('');
//     const [checked, setChecked] = useState('appetizer');


//     function setname(info) {
//         const value = info.target.value;
//         currentName = value;

//         if (checked == 'appetizer') {
//             meal.appetizer.name = value
//         }
//         else if (checked == 'dinner') {
//             meal.dinner.name = value;
//         }
//         else {
//             meal.dessert.name = value
//         }

//     }
//     function setimage(info) {
//         const value = info.target.value;
//         currentImage = value;

//         if (checked == 'appetizer') {
//             meal.appetizer.image = value
//         }
//         else if (checked == 'dinner') {
//             meal.dinner.image = value;
//         }
//         else {
//             meal.dessert.image = value
//         }

//     }
//     function setdescription(info) {
//         const value = info.target.value;
//         currentDescription = value;

//         if (checked == 'appetizer') {
//             meal.appetizer.description = value
//         }
//         else if (checked == 'dinner') {
//             meal.dinner.description = value;
//         }
//         else {
//             meal.dessert.description = value
//         }

//     }
//     function setprice(info) {
//         const value = info.target.value;
//         meal.price = value;

//     }
//     function settittle(info) {
//         const value = info.target.value;
//         meal.mealName = value;

//     }
//     function setlocation(info) {
//         const value = info.target.value;
//         meal.location = value;

//     }
//     function settime(info) {
//         const value = info.target.value;
//         meal.time = value;

//     }



//     return (
//         <View style={styles.container}>
//             <TextInput
//                 placeholder='Title'
//                 style={{ borderBottomWidth: 1, fontSize: 15, width: Dimensions.get('window').width - 20 }}
//                 value={Title}
//                 onChangeText={(text) => settitle(text)}
//             />
//             <Text style={styles.title}>Location</Text>
//             <TextInput
//                 placeholder='Location'
//                 style={styles.control}
//                 value={currentName}
//                 onChangeText={(text) => setlocation(text)}
//             />
//             <Text style={styles.title}>Time</Text>
//             <TextInput
//                 placeholder='Time'
//                 style={styles.control}
//                 value={currentName}
//                 onChangeText={(text) => settime(text)}
//             />
//             <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Appitizer      Dinner        Dessert</Text>
//             <Text style={styles.buttonGorup}>
//                 <RadioButton
//                     value="appitizer"
//                     status={checked === 'appetizer' ? 'checked' : 'unchecked'}
//                     onPress={() => setChecked('appitizer')}
//                     style={{ padding: Dimensions.get('window').width }} />
//                 <RadioButton
//                     value="dinner"
//                     status={checked === 'dinner' ? 'checked' : 'unchecked'}
//                     onPress={() => setChecked('dinner')}
//                     style={{ padding: 120 }} />
//                 <RadioButton
//                     value="dessert"
//                     status={checked === 'dessert' ? 'checked' : 'unchecked'}
//                     onPress={() => setChecked('dessert')}
//                     style={{ padding: 120 }} />
//             </Text>
//             <Text style={styles.title}>Meal Name</Text>
//             <TextInput
//                 placeholder='Meal name'
//                 style={styles.control}
//                 value={currentName}
//                 onChangeText={(text) => setname(text)}
//             />
//             <Text style={styles.title}>Description</Text>
//             <TextInput
//                 placeholder='Description'
//                 style={styles.control}
//                 value={currentDescription}
//                 onChangeText={(text) => setdescription(text)}
//             />

//             <Text style={styles.title}>Ingredients</Text>
//             <TextInput
//                 placeholder='Ingredients'
//                 style={styles.control}
//                 value={currentIngredients}
//                 onChangeText={(text) => setingrediant(text)}
//             />

//             <Text style={styles.title}>Allergens</Text>
//             <TextInput
//                 placeholder='Temporary'
//                 style={styles.control}
//                 value={currentAllergens}
//                 onChangeText={(text) => setallergy(text)}
//             />
//             <Text style={styles.title}>Price</Text>
//             <TextInput
//                 placeholder='$0.00'
//                 style={styles.control}
//                 value={meal.price}
//                 keyboardType='numeric'
//                 onChangeText={(text) => setprice(text)}
//             />
//             <Button title="Create Meal" style={styles.control} color='#a68258' />
//             {error
//                 ? <Text>{error}</Text>
//                 : null
//             }

//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F6F4F1',
//         alignItems: 'flex-start',
//         justifyContent: 'space-between',
//         padding: 10,
//     },
//     controls: {
//         flex: 1,
//     },
//     control: {
//         marginTop: 10,
//         backgroundColor: "white",
//         opacity: 1,
//         height: 50,
//         width: "100%"
//     },
//     error: {
//         marginTop: 10,
//         padding: 10,
//         color: 'red'
//     },
//     buttonGorup:
//     {
//         backgroundColor: '#F6F4F1',
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//         flexDirection: 'row',
//         width: '100%',
//     },
//     title: {
//         fontSize: 20,
//     }
// });

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
    const [time, settime] = useState('');
    const [location, setlocation] = useState('');
    const [price, setprice] = useState('');
    const [tags, settags] = useState('');


    const [error, seterror] = useState(null);
    const [validSubmit, setvalidSubmit] = useState('');
    const [submitting, setsubmitting] = useState(false);

    const checkInputs = () => {
        seterror(null);
        if (mealName.length > 1
            && time.length > 1
            && location.length > 1
            && price.length > 1) {
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


    return (
        <View style={styles.container}>
            <View style={styles.spaceBetweenRow}>
                <TextInput
                    placeholder='Name of meal'
                    style={styles.nameInput}
                    onChangeText={(text) => handleMealNameChange(text)}
                />
                <TextInput
                    placeholder='$Price'
                    style={styles.priceInput}
                    onChangeText={(text) => handleMealNameChange(text)}
                />
            </View>
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
                <Tab.Screen name="Appetizer" children={() => <AppetizerScreen />} />
                <Tab.Screen name="Entree" children={() => <EntreeScreen />} />
                <Tab.Screen name="Desert" children={() => <DesertScreen />} />
            </Tab.Navigator>
            <TouchableOpacity
                style={[styles.submitButton, validSubmit ? null : { opacity: .5 }]}
                // onPress={() => onCreate()}
                disabled={!validSubmit}
            >
                {submitting
                    ? <ActivityIndicator />
                    : <Text style={styles.fontSize}>Create</Text>
                }
            </TouchableOpacity>
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
});

