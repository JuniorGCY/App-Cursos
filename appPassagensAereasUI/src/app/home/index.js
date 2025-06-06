import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Svg, {Line, Circle} from 'react-native-svg'
import QRCODE from 'react-native-qrcode-svg'


import { styles} from "./style"
import Flight from "../../component/flight";
import Info from "../../component/info";
import { colors } from "../../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
            style={styles.header} 
            source={require("../../assets/images/LA.jpg")}>

                <Text style={styles.title}> Cartão de Embarque</Text>
                <Text style={styles.subtitle}> Falta 45 dias para a viagem</Text>
            </ImageBackground>

            <View style={styles.ticket}>
                <View style={styles.content}>
                    <View style={styles.flight}>
                        <Flight label="São Paulo" value="GRU"/>

                        <View style={styles.duration}>
                            <MaterialIcons name="flight" size={45} color="#000"/>
                            <Text style={styles.hours}> 9h 5M</Text>
                        </View>

                        <Flight label="Los Angeles" value="LA"/>
                    </View>

                    <Text style={{color: '#000',fontSize: 15}}>PASSAGEIRO</Text>
                    <Text style={{color: '#000',fontSize: 18, fontWeight: 'bold'}}>Junior Gomes Carneiro</Text>

                    <View style={styles.details}>
                        <Info label="Data" value="17 de nov"/>
                        <Info label="Embarque" value="17:25"/>
                    </View>
    
                </View>

                <View>
                    <Svg height={20} width="100%">
                        <Line 
                     x1="0%"
                     y1="50%"
                     x2="100%"
                     y2="50%"
                     stroke={colors.gray[400]}
                     strokeWidth={2}
                     strokeDasharray="5,5"/>

                     <Circle r={8} cx="0%" cy="50%" fill={colors.black}/>
                     <Circle r={8} cx="100%" cy="50%" fill={colors.black}/>
                    </Svg>
                </View>

                <View style={styles.footer}>
                    <View>
                        <Info label="Voo" value="YZ 607"/>
                        <Info label="Assento" value="29G"/>
                    </View>
                    
                    <View> 
                      <Info label="Terminal" value="3"/>
                      <Info label="Portão" value="39"/>
                    </View>

                    <View>
                        <QRCODE value="boarding Code" size={130}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}