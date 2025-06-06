import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Feather from 'react-native-vector-icons/Feather'
import {createDrawerNavigator} from '@react-navigation/drawer'


import stackRoutes from './stackRoutes';
import Sobre from '../Page/Sobre';
import Contato from '../Page/Contato';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();


export default function Routes() {
    return (
        <Drawer.Navigator 
        drawerContent={CustomDrawer}>
            <Drawer.Screen 
            name='Home'
            component={stackRoutes}
            options={{
                title: 'Inicio'
            }}/>

            <Drawer.Screen 
            name='Sobre'
            component={Sobre}/>

            <Drawer.Screen 
            name='Contato'
            component={Contato}/>
        </Drawer.Navigator>
    )
}
