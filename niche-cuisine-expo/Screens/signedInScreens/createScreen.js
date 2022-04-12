import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TextInput, Dimensions} from 'react-native';
import {RadioButton} from 'react-native-paper';

export default function CreateMealScreen({navigation})
{
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
        "entree":  {
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
    const currentName = "";
    const currentImage = "";
    const currentDescription = "";
    const currentIngredients = [];
    const currentAllergens = [];
    const [error, seterror] = useState('');
<<<<<<< Updated upstream
    const [checked, setChecked] = useState('Appetizer');
=======
    const [checked, setChecked] = useState('appetizer');


    function setname(info)
    {
      const value = info.target.value;
      currentName = value;

      if(checked == 'appetizer')
      {
          meal.appetizer.name = value
      }
      else if (checked == 'dinner')
      {
          meal.dinner.name = value;
      }
      else 
      {
          meal.dessert.name = value
      }

    }
    setimage(info)
    {
      const value = info.target.value;
      currentImage = value;

      if(checked == 'appetizer')
      {
          meal.appetizer.image = value
      }
      else if (checked == 'dinner')
      {
          meal.dinner.image = value;
      }
      else 
      {
          meal.dessert.image = value
      }

    }
    setdescription(info)
    {
      const value = info.target.value;
      currentDescription = value;

      if(checked == 'appetizer')
      {
          meal.appetizer.description = value
      }
      else if (checked == 'dinner')
      {
          meal.dinner.description = value;
      }
      else 
      {
          meal.dessert.description = value
      }

    }
    setprice(info)
    {
      const value = info.target.value;
      meal.price = value;

    }
    settittle(info)
    {
      const value = info.target.value;
      meal.mealName = value;

    }
    setlocation(info)
    {
      const value = info.target.value;
      meal.location = value;

    }
    settime(info)
    {
      const value = info.target.value;
      meal.time = value;

    }
  
  
>>>>>>> Stashed changes

return(
   <View style={styles.container}>
<TextInput
        placeholder='Title'
        style={{borderBottomWidth:1,fontSize:15,width:Dimensions.get('window').width-20}}
        value={Title}
        onChangeText={(text)=> settitle(text)}
    />
<<<<<<< Updated upstream
            <Text style={{fontSize:25,fontWeight:'bold'}}>Appetizer      Dinner        Dessert</Text>
            <Text style={styles.buttonGorup}>
           <RadioButton 
            value = "Appetizer"
            status={ checked === 'Appetizer' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Appetizer')}
=======
     <Text style={styles.title}>Location</Text>
    <TextInput
        placeholder='Location'
        style={styles.control}
        value={currentName}
        onChangeText={(text)=> setlocation(text)}
    />
     <Text style={styles.title}>Time</Text>
    <TextInput
        placeholder='Time'
        style={styles.control}
        value={currentName}
        onChangeText={(text)=> settime(text)}
    />
            <Text style={{fontSize:25,fontWeight:'bold'}}>Appitizer      Dinner        Dessert</Text>
            <Text style={styles.buttonGorup}>
           <RadioButton 
            value = "appitizer"
            status={ checked === 'appetizer' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('appitizer')}
>>>>>>> Stashed changes
            style={{padding:Dimensions.get('window').width}}/>
            <RadioButton 
           value = "dinner"
           status={ checked === 'dinner' ? 'checked' : 'unchecked' }
           onPress={() => setChecked('dinner')}
           style={{padding:120}}/>
           <RadioButton 
           value = "dessert"
           status={ checked === 'dessert' ? 'checked' : 'unchecked' }
           onPress={() => setChecked('dessert')}
           style={{padding:120}}/>
       </Text>
       <Text style={styles.title}>Meal Name</Text>
    <TextInput
        placeholder='Meal name'
        style={styles.control}
        value={currentName}
        onChangeText={(text)=> setname(text)}
    />
    <Text style={styles.title}>Description</Text>
    <TextInput
        placeholder='Description'
        style={styles.control}
        value={currentDescription}
        onChangeText={(text)=> setdescription(text)}
    />

<Text style={styles.title}>Ingredients</Text>
    <TextInput
        placeholder='Ingredients'
        style={styles.control}
        value={currentIngredients}
        onChangeText={(text)=> setingrediant(text)}
    />
  
    <Text style={styles.title}>Allergens</Text>
    <TextInput
        placeholder='Temporary'
        style={styles.control}
        value={currentAllergens}
        onChangeText={(text)=> setallergy(text)}
    />
 <Text style={styles.title}>Price</Text>
<TextInput
        placeholder='$0.00'
        style={styles.control}
        value={meal.price}
        keyboardType = 'numeric'
        onChangeText={(text)=> setprice(text)}
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

