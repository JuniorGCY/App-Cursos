import React, { Component } from "react";
import { View, Text, StyleSheet, Switch,TextInput, TouchableOpacity} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { Alert } from "react-native";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      genero: '',
      limite: 0.0,
      estudante: false
    };

    this.mostrarDados = this.mostrarDados.bind(this)
  }

  mostrarDados() {
    Alert.alert(this.state.nome)
    Alert.alert(this.state.idade)
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Cubank</Text>
        <Text style={styles.texts}> Digite seu nome</Text>

        <TextInput 
         style={styles.textInput}
         placeholder="Digite seu nome"
         multiline={false}
         onChangeText={ (catchName) => this.setState({nome: catchName})}
         />
         <TextInput 
          style={[styles.textInput,{width: 100,height: 50, marginTop: 10}]}
          placeholder="idade"
          multiline={false}
          onChangeText={ (catchAge) => this.setState({idade: catchAge})}
          maxLength={2}/>

          <Picker style={styles.picker}
           selectedValue={this.state.genero}
           onValueChange={ (itemValue,itemIndex) => this.setState({genero: itemValue})}>

           <Picker.Item label="Homem" value='Homem'/>
           <Picker.Item label="Mulher" value='Mulher'/>
          </Picker>

          <Text style={styles.texts}> Seu limite pré-aprovado é</Text>

          <Slider style={{margin: 10}}
           minimumValue={0}
           maximumValue={1000}
           minimumTrackTintColor="#00FF00"
           maximumTrackTintColor="#FF0000"
           onValueChange={ (limiteSlider) => this.setState({limite: limiteSlider})}/>
           <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>R$ {this.state.limite.toFixed(1)}</Text>

           <View style={styles.viewSwitch}>

           <Text style={{fontSize: 14, fontWeight: 'bold'}}>É Estudante?</Text>
           <Switch style={{alignSelf: 'flex-start'}}
            value={this.state.estudante}
            onValueChange={ (valorSwitch) => this.setState({estudante: valorSwitch})}/>

           </View>

          <TouchableOpacity style={styles.button} onPress={this.mostrarDados}>
            <View style={styles.buttonArea}>
              <Text style={styles.mainText}> Cadastrar</Text>
            </View>
          </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  texts: {
    fontSize: 18,
    textAlign: 'center'
  },
  textInput: {
    marginTop: 40,
    marginStart: 20,
    marginEnd: 20,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 15
  },
  picker: {
    
  },
  button: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#00FFFF"
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewSwitch: {
    flexDirection: 'row',
    marginTop: 10,
    marginStart: 20
  }
});

export default App;