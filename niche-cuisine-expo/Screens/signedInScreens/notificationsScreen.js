import { StyleSheet,Switch,Text,View } from 'react-native';
import InviteCard from '../../Components/inviteCard';
import React, { useState } from "react";
// Components

export default function NotificationsScreen({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        // container 1
        <View style={styles.container}>
             <Text>Notifications Screen</Text>

             <View style={styles.container}>
             <Text>Please Select A User Mode</Text>
                {/* chef or guest toggles goes here
                https://reactnative.dev/docs/switch */}
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
      />
                             
            </View>
            <View style={styles.container}>
                {/* container for 2 tabs PENDING AND APPOVED */}
                <View style={styles.container}>
                    {/* conatiner for the invitecards 
                    should look like franks feed page only sluttier ;) */}
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
