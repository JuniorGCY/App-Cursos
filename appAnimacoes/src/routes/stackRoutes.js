import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from "../Page/Home";
import Detalhes from "../Page/Detalhes";

const Stack = createNativeStackNavigator();

export default function stackRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
             name="Home" 
             component={Home}/>

        <Stack.Screen 
            name="Detalhes"
            component={Detalhes}/>
        </Stack.Navigator>
    )
}