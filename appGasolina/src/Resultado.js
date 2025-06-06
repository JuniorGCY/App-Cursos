import React,{Component} from "react";
import { View, Text,Image, TouchableOpacity,StyleSheet } from "react-native";

class Resultado extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Image 
                 style={styles.logo}
                 source={require('./img/gas.png')}/>

                 <Text style={styles.textMain}>Compensa mais usar {this.props.varResultado}</Text>
                 <Text style={[styles.textMain, {fontSize: 20}]}>Com os preços: </Text>
                 <Text style={styles.texts}>Ácool: {this.props.varAlcool}</Text>
                 <Text style={styles.texts}>Gasolina: {this.props.varGasolina} </Text>
                 
                 <TouchableOpacity onPress={this.props.fechar}>
                  <View style={styles.buttonArea}>
                    <Text style={styles.buttonTitle}>Calcular Novamente</Text>
                  </View>
                 </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#222',
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: 100
    },
    textMain: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    texts: {
        marginTop: 10,
        fontSize: 20,
        color: '#FFF'
    },
    buttonArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        marginTop: 20,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222'
      },
      buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold'
      }
})

export default Resultado;