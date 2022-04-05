import { StyleSheet, Text, View } from 'react-native';

// Components

export default function NotificationsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Notifications Screen</Text>
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
