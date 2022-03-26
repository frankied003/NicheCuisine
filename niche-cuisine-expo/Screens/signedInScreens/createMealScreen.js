import { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TextInput } from 'react-native';

export default function CreateMealScreen({navigation})
{



return(
   <View style={styles.container}>
    <TextInput
        placeholder='Meal name'
        style={styles.control}
        value={email}
        onChangeText={(text) => setemail(text)}
    />
    <Text>Description</Text>
    <TextInput
        placeholder='Description'
        style={styles.control}
        value={password}
        onChangeText={(text) => setpassword(text)}
    />

<Text>Ingrediants</Text>
    <TextInput
        placeholder='Ingrediants'
        style={styles.control}
        value={password}
        onChangeText={(text) => setpassword(text)}
    />
    <Text>Allergens</Text>
    <TextInput
        placeholder='Temporary'
        style={styles.control}
        value={password}
        onChangeText={(text) => setpassword(text)}
    />
    <Button title="Create Meal" style={styles.control} onPress={() => login()} />
    {error
        ? <Text>{error}</Text>
        : null
    }

</View>
);
}