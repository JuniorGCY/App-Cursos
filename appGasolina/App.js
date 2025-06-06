import React, {Component} from "react";
import { View, Text, Image, StyleSheet, Modal,TouchableOpacity, TextInput, Alert} from "react-native";

import Resultado from "./src/Resultado";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      alcool: 0.00,
      gasolina: 0.00,
      resultado: ''

    }
    this.entrar = this.entrar.bind(this)
    this.fechar = this.fechar.bind(this)
  }

  entrar() {
    let alcool = this.state.alcool
    let gasolina = this.state.gasolina
    

    if (alcool != 0.00 && gasolina != 0.00) {
      if (alcool / gasolina < 0.7) {
        this.setState({resultado: 'Álcool'})
      } else {
        this.setState({resultado: 'Gasolina'})
      }
      this.setState({modalVisible: true})
    } else {
      Alert.alert("Preencha a porra dos campos FDP")
    }
  }

  fechar(visible) {
    this.setState({modalVisible: visible})
  }
 
  render() {
    return (
      <View style={styles.container}>

        <Text>A</Text>
        <Image style={styles.logo} source={require('./src/img/logo.png')}/>
        <Text style={styles.textMain}>Qual a melhor opção?</Text>
        <TextInput 
         style={styles.TextInput}
         placeholder="Álcool (preço por litro):"
         placeholderTextColor={'#222'}
         inputMode="decimal"
         multiline={false}
         onChangeText={ (value) => this.setState({alcool: value})}
         />
        <TextInput 
         style={[styles.TextInput, {marginTop: 20}]}
         placeholder="Gasolina (preço por litro):"
         placeholderTextColor={'#222'}
         inputMode="decimal"
         multiline={false}
         onChangeText={ (value) => this.setState({gasolina: value})}
         />

        <TouchableOpacity onPress={this.entrar}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttonTitle}>Calcular</Text>
          </View>
         </TouchableOpacity>

         <Modal 
          animationType="slide" 
          visible={this.state.modalVisible}>

            <Resultado fechar={ () => this.fechar(false)}
              varResultado={this.state.resultado}
              varGasolina={this.state.gasolina}
              varAlcool={this.state.alcool}/>

         </Modal>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  },
  TextInput: {
    width: 250,
    height: 50,
    marginTop: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
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

export default App;