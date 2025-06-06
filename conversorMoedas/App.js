import React, {useState, useEffect, use}from 'react';
import { View, Text, StyleSheet, ActivityIndicator,TextInput, TouchableOpacity } from 'react-native';

import PickerItem from './src/Picker';
import { api } from './src/Service/api';


export default function App() {
  
  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)
  const [moedaSelecionado, setMoedaSelecionada] = useState(null)
  const [moedaBValor, setmoedaBValor] = useState("")

  const [valorMoeda,setvalorMoeda] = useState(null)
  const [valorConvertido, setvalorConvertido] = useState(0);

  useEffect( () => {
    async function loadMoedas() {
      const response = await api.get("all")
      let  arrayMoedas = [];
      Object.keys(response.data).map( (key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })

      setMoedas(arrayMoedas)
      setMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false)
    }
    loadMoedas()
  }, [])

  if (loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101215'}}>
        <ActivityIndicator color='#FFF' size='large'/>
      </View>
    )
  }

  async function converter(){
    if (moedaBValor === 0 || moedaBValor === "" || moedaSelecionado === null) {
      return;
    }

    const response = await api.get(`/all/${moedaSelecionado}-BRL`)
    let resultado = (response.data[moedaSelecionado].ask * parseFloat(moedaBValor))
    setvalorConvertido(` ${resultado}`)
    setvalorMoeda(moedaBValor)
  }

  return (
    <View style={styles.container}>

      <View style={styles.areamoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem 
          moedas={moedas}
          moedaSelecionado={moedaSelecionado}
          onchange={ (moeda) => setMoedaSelecionada(moeda)}
          />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.titulo}>Digite um valor pra converter </Text>
        <TextInput
         placeholder='EX: 1.50'
         style={styles.input}
         keyboardType='numeric'
         value={moedaBValor}
         onChangeText={ (valor) => setmoedaBValor(valor)}></TextInput>
      </View>

      <TouchableOpacity style={styles.botaoArea} onPress={converter}>
        <Text style={styles.botaoConverter}> converter</Text>
      </TouchableOpacity>

      {valorConvertido !== 0 && (
        <View style={styles.areaResultado}>

        <Text style={styles.valorConvertido}>
          {valorMoeda} {moedaSelecionado}
        </Text>

        <Text style={styles.valorConvertido}>
          Corresponde a
        </Text>

        <Text style={styles.valorConvertido}>
          {valorConvertido}
        </Text>
      </View>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center'
  },
  areamoeda: {
    backgroundColor: '#F9F9F9',
    width: '90%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  titulo: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center'
  },
  areaValor: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10
  },
  input: {
    padding: 8,
    fontSize: 18,
    color: '#000'
  },
  botaoArea: {
    width: '70%',
    height: 45,
    backgroundColor: '#fb4b57',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  botaoConverter: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 34,
    borderRadius: 8,
    alignItems:'center',
    justifyContent: 'center',
    padding: 24
  },
  valorConvertido: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold'
  }
})
