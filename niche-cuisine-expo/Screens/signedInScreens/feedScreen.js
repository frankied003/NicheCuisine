import { StyleSheet, Text, View } from 'react-native';

// Components

export default function FeedScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Feed screen (where swiping left and right will go, finding meals)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
