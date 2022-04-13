import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function SelectibleTag(props) {
    return (
        <TouchableOpacity style={styles.tag} onPress={props.onClick}>
            <Text style={styles.tagText}>{props.name}</Text>
            <View style={props.selected ? styles.selectedTag : styles.unselectedTag} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tag: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10
    },
    tagText: {
        fontSize: 13,
        marginBottom: 5
    },
    selectedTag: {
        backgroundColor: '#A68258',
        width: 30,
        height: 30,
        borderRadius: 3
    },
    unselectedTag: {
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        borderRadius: 3
    }
});