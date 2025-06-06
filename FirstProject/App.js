import React, { useState, useEffect, useMemo,useRef} from "react";
import { View, Text, StyleSheet,TouchableOpacity,TextInput} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App () {

  const [nome, setNome] = useState('');
  const [input,setInput] = useState('');
  const nomeInput = useRef(null);

  useEffect( () => {

    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');

      if  (nomeStorage !== null) {
        setNome(nomeStorage)
      }
    }
    getStorage();

  }, []);

  useEffect( () => {

    async function saveStorage() {
      await AsyncStorage.setItem('nomes',nome);
    }
    saveStorage();

  }, [nome])

  function alteraNome() {
    setNome(input)
    setInput('')
  }

  function novoNome() {

  }

  const letraNome = useMemo( () => {
    console.log('mudou a letra')
    return nome.length;
  }, [nome]);
  

    return(
      <View style={styles.container}>

        <TextInput 
         placeholder="Seu Nome"
         value={input}
         onChangeText={ (texto) => setInput(texto)}
         ref={nomeInput}/>
        
        <TouchableOpacity style={styles.btn} onPress={alteraNome}>
          <Text style={styles.btnText}>Altera Nome</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{nome}</Text>
        <Text style={styles.text}>tem {letraNome} letras </Text>

        <TouchableOpacity onPress={novoNome}>
          <Text> Novo Nome</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  btn: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#222',
    borderRadius: 20
  },
  btnText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center'
  }
})