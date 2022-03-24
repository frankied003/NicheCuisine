import {TouchableOpacity, StyleSheet, Text, View, Image,} from 'react-native';


// Stacks

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
            style= {{width:400, height:300}}
                source={require('niche-cuisine-expo/assets/Niche.png')}
            />
            <Text style={styles.setFontSizeOne}>Sign up or Login to continue!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}><Text style={styles.setFontSizeTwo}>Login</Text></TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}><Text style={styles.setFontSizeTwo}>Signup</Text></TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F4F1',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80
    },
    setFontSizeOne:{
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20
    },
    setFontSizeTwo:{
        fontSize: 20,
        color: 'white'
    
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#A68258",
        width: 300,
        height: 50,
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 15,
        padding: 10     
     },
});
