import React from "react";
import { View,Text,StyleSheet, Button } from "react-native";

export default function Sobre() {

    return (
        <View style={styles.container}>
            <Text> Sobre Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})