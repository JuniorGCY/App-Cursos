import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput,TouchableOpacity} from "react-native";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      inputUser: 0.00,
      celsiusTemp: 0.00,
      fahrenheitTemp: 0.00,
      kelvinTemp: 0.00
    };

    this.converter= this.converter.bind(this);
  }

  converter(decimal) {
    this.setState ({celsiusTemp: (decimal * 1.8) + 32});
    this.setState ({fahrenheitTemp: (decimal - 32) / 1.8});
    this.setState ({kelvinTemp: decimal- 273.15})
  }

  render(){
    return(
      <View style={styles.container}>

        <Text style={styles.textMain}>Conversor Temperatura</Text>
        <TextInput  
          style={styles.textInput}
          placeholder="Digite a temperatura"
          numberOfLines={1}
          maxLength={6}
          autoFocus={true}
          inputMode="decimal"
          keyboardType="decimal-pad"
          textAlign="center"
          onChangeText={(this.converter)}/>

      
          <Text style={styles.textResultado}>Celsius para Fahrenehit: {this.state.celsiusTemp.toFixed(1)}</Text>
          <Text style={styles.textResultado}>Fahrenehit para Celsius: {this.state.fahrenheitTemp.toFixed(1)}</Text>
          <Text style={styles.textResultado}>Kelvin: {this.state.kelvinTemp.toFixed(1)}</Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  textMain: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  textResultado: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },
  textInput: {
    width: 200,
    height: 50,
    margin: 10,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
  },
  button: {
    width: 100,
    height: 50,
    margin: 10,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10
  },
  btArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btText: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;