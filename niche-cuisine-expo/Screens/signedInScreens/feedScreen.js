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
        backgroundColor: '#F6F4F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
