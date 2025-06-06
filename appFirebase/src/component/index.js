import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { db } from "../firebaseConnection";
import { deleteDoc, doc} from "firebase/firestore";

export default function Component( {data, handleEdit}) {

    async function handleDeleteItem(){
        const docRef = doc(db, "users",data.id);
        await deleteDoc(docRef)
    }

    function handleEditUser() {
        handleEdit(data);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.item}>Nome: {data.nome}</Text>
            <Text style={styles.item}>idade: {data.iddade}</Text>
            <Text style={styles.item}>cargo: {data.cargo}</Text>

            <TouchableOpacity onPress={handleDeleteItem}>
                <Text> Deletar usuario</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditUser}>
                <Text> Editar Usuario</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 4,
        marginBottom: 10
    },
    item: {
        color: '#000',
        fontSize: 16
    },
})