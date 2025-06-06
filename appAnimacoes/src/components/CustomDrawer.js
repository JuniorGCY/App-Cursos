import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'


export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                width: '100%',
                height: 85,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image 
                source={require('../assets/perfil.png')}
                style={{ width: 65, height: 65}}/>

                <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 35}}>Bem vindo!</Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}