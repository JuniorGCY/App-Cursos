import React, {useState,useContext} from "react";
import { StyleSheet, Text, View,SafeAreaView, FlatList, TouchableOpacity} from "react-native";

import Feather from 'react-native-vector-icons/Feather'
import Produto from "../../components/Produto";
import {useNavigation} from '@react-navigation/native'
import { CarContext } from "../../contexts/CartContent";


export default function Home() {
    const [produtos, setProdutos] = useState ([
        {
            id: '1',
            name: 'Coca Cola',
            price: 19.90
        },
        {
            id: '2',
            name: 'Chocolate',
            price: 6.50
        },
        {
            id: '3',
            name: 'Queijo 500g',
            price: 15
        },
        {
            id: '4',
            name: 'Batata Frita',
            price: 23.90
        },
        {
            id: '5',
            name: 'Guaraná Lata',
            price: 6.00
        },
    ])
    const navigation = useNavigation()
    const {cart, addItemCart} = useContext(CarContext)
    function handleAddCart(item) {
        addItemCart(item)
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.carContent}>

            <Text style={styles.title}>Lista de Produtos</Text>
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}
                >
                <View style={styles.dot}>
                    <Text style={styles.dotText}>
                        {cart?.length}
                    </Text>
                </View>
                <Feather name="shopping-cart" size={30} color="#000"/>
            </TouchableOpacity>
        </View>

        <FlatList 
         style={styles.list}
         data={produtos}
         keyExtractor={ (item) => String(item.id)}
         renderItem={ ( {item} ) => <Produto data={item} addToCart={ () => handleAddCart(item)}/>}/>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingStart: 15,
        paddingEnd: 15
    },
    carContent: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 24,
        marginBottom: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4
    },
    dotText: {
        fontSize: 12,
        color:  '#FFF'
    }
})