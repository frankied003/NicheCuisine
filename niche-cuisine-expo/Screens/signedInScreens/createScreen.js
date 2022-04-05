import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TextInput, Dimensions} from 'react-native';
import {RadioButton} from 'react-native-paper';

export default function CreateMealScreen({navigation})
{
    const [Title, settitle] = useState('');
    const [MealName, setname] = useState('');
    const [description, setdescription] = useState('');
    const [ingrediants, setingrediant] = useState(''); 
    const [allergy,setallergy]=useState('');
    const [error, seterror] = useState('');
    const [checked, setChecked] = useState('Appitizer');

return(
   <View style={styles.container}>
<TextInput
        placeholder='Title'
        style={{borderBottomWidth:1,fontSize:15,width:Dimensions.get('window').width-20}}
        value={Title}
        onChangeText={(text)=> settitle(text)}
    />
            <Text style={{fontSize:25,fontWeight:'bold'}}>Appitizer      Dinner        Dessert</Text>
            <Text style={styles.buttonGorup}>
           <RadioButton 
            value = "Appitizer"
            status={ checked === 'Appitizer' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Appitizer')}
            style={{padding:Dimensions.get('window').width}}/>
            <RadioButton 
           value = "Dinner"
           status={ checked === 'Dinner' ? 'checked' : 'unchecked' }
           onPress={() => setChecked('Dinner')}
           style={{padding:120}}/>
           <RadioButton 
           value = "Dessert"
           status={ checked === 'Dessert' ? 'checked' : 'unchecked' }
           onPress={() => setChecked('Dessert')}
           style={{padding:120}}/>
       </Text>
       <Text style={styles.title}>Meal Name</Text>
    <TextInput
        placeholder='Meal name'
        style={styles.control}
        value={MealName}
        onChangeText={(text)=> setname(text)}
    />
    <Text style={styles.title}>Description</Text>
    <TextInput
        placeholder='Description'
        style={styles.control}
        value={description}
        onChangeText={(text)=> setdescription(text)}
    />

<Text style={styles.title}>Ingrediants</Text>
    <TextInput
        placeholder='Ingrediants'
        style={styles.control}
        value={ingrediants}
        onChangeText={(text)=> setingrediant(text)}
    />
  
    <Text style={styles.title}>Allergens</Text>
    <TextInput
        placeholder='Temporary'
        style={styles.control}
        value={allergy}
        onChangeText={(text)=> setallergy(text)}
    />
    <Button title="Create Meal" style={styles.control} color='#a68258'/>
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
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding:10,
    },
    controls: {
        flex: 1,
    },
    control: {
        marginTop: 10,
        backgroundColor:"white",
        opacity:1,
        height:50,
        width:"100%"
    },
    error: {
        marginTop: 10,
        padding: 10,
        color: 'red'
    },
    buttonGorup:
    {
        backgroundColor: '#F6F4F1',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection:'row',
        width:'100%',
    },
    title:{
        fontSize:20,
    }
});

