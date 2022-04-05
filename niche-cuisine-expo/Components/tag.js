import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Tag(props) {
    return (
        <View style={styles.tag}>
            <Text style={styles.tagText}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dedede',
        borderRadius: 25,
        marginRight: 10,
        paddingVertical: 7,
        paddingHorizontal: 13
    },
    tagText: {
        fontSize: 13,
        fontWeight: '600'
    }
});