import { StyleSheet, Text, View } from 'react-native';
import InviteCard from '../../Components/inviteCard';


// Components

export default function NotificationsScreen({ navigation }) {
   
    return (
        // container 1
        <View style={styles.container}>
             <Text>Notifications Screen</Text>

             <View style={styles.container}>
                // chef or guest toggles goes here
                // https://reactnative.dev/docs/switch
                
                             
            </View>
            <View style={styles.container}>
                // container for 2 tabs PENDING AND APPOVED
                <View style={styles.container}>
                    // conatiner for the invitecards 
                    // should look like franks feed page 
             
                </View>
             
            </View>

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
