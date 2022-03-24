import { Button, StyleSheet, Text, View, Image } from 'react-native';

// Stacks

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
            style= {{width:400, height:300}}
                source={require('niche-cuisine-expo/assets/Niche.png')}
            />
            <Text style={styles.setFontSizeOne}>Sign up to continue</Text>
            <Button title='Login' onPress={() => navigation.navigate("Login")} />
            <Button title='Signup' onPress={() => navigation.navigate("Signup")} />
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
    setFontSizeOne:{
        fontSize: 26
    },
});
