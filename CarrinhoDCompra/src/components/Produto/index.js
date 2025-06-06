import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Produto( {data, addToCart}) {
    return (
        <View style={styles.container}>

            <View>
            <Text style={styles.title}> {data.name}</Text>
            <Text style={styles.price}> R${data.price}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={addToCart}> + </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#DFDFDF',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
    },
    button: {
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor: '#168fff',
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 10
    }
})