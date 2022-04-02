import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';

export default function CreateMealScreen({navigation})
{
    const [MealName, setname] = useState('');
    const [description, setdescription] = useState('');
    const [ingrediants, setingrediant] = useState(''); 
    const [allergy,setallergy]=useState('');
    const [error, seterror] = useState('');
    const [checked, setChecked] = useState('Appitizer');

return(
   <View style={styles.container}>

            <Text>Appitizer    Dinner     Dessert</Text>
            <Text>
           <RadioButton 
            value = "Appitizer"
            status={ checked === 'Appitizer' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Appitizer')}/>
            <Text>         </Text>
            <RadioButton 
           value = "Dinner"
           status={ checked === 'Dinner' ? 'checked' : 'unchecked' }
           onPress={() => setChecked('Dinner')}/>
           <Text>         </Text>
           <RadioButton 
           value = "Dessert"
           status={ checked === 'Dessert' ? 'checked' : 'unchecked' }
           onPress={() => setChecked('Dessert')}/>
       </Text>
    <TextInput
        placeholder='Meal name'
        style={styles.control}
        value={MealName}
        onChangeText={(text)=> setname(text)}
    />
    <Text>Description</Text>
    <TextInput
        placeholder='Description'
        style={styles.control}
        value={description}
        onChangeText={(text)=> setdescription(text)}
    />

<Text>Ingrediants</Text>
    <TextInput
        placeholder='Ingrediants'
        style={styles.control}
        value={ingrediants}
        onChangeText={(text)=> setingrediant(text)}
    />
    <Text>Allergens</Text>
    <TextInput
        placeholder='Temporary'
        style={styles.control}
        value={allergy}
        onChangeText={(text)=> setallergy(text)}
    />
    <Button title="Create Meal" style={styles.control}/>
    {error
        ? <Text>{error}</Text>
        : null
    }

</View>
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
        marginTop: 10
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: 'red'
    }
});

