import { StyleSheet, Text, View } from 'react-native';

// Components

export default function SearchScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
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
});
