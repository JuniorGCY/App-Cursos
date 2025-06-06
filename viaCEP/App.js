import React, {useState, useRef}from 'react';
import { View,Text, TextInput,TouchableOpacity,StyleSheet,SafeAreaView, Keyboard} from 'react-native';

import api from './src/service/api';

export default function App() {

    const [cep,setCep] = useState('');
    const inputRef = useRef(null);
    const [cepUser,setcepUser] = useState(null);

    function limpar() {
        setCep('')
        inputRef.current.focus()
    }

    async function buscar() {
        if (cep == '') {
            alert('Digite um cep válido')
            setCep('')
            return;
        }

        try{
            const response = await api.get(`/${cep}/json`)
            setcepUser(response.data)
            Keyboard.dismiss();
        } catch (error){
            console.log('Error' + error)
        }
        

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.text}>Digite o CEP desejado</Text>
                <TextInput 
                style={styles.textInput}
                placeholder='Ex: 23232323'
                value={cep}
                onChangeText={ (texto) => setCep(texto)}
                ref={inputRef}
                keyboardType='numeric'/>
            </View>

            <View style={styles.view}>
                <TouchableOpacity style={styles.botao} onPress={limpar}>
                    <Text style={styles.textBotao}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={buscar}>
                    <Text style={styles.textBotao}>Buscar</Text>
                </TouchableOpacity>
            </View>

            {cepUser && 
              <View style={styles.viewResultado}>
                <Text style={styles.resultadoText}> CEP: {cepUser.cep}</Text>
                <Text style={styles.resultadoText}> Logradouro: {cepUser.logradouro}</Text>
                <Text style={styles.resultadoText}> Bairro: {cepUser.bairro}</Text>
                <Text style={styles.resultadoText}> Cidade: {cepUser.localidade}</Text>
                <Text style={styles.resultadoText}> Estado: {cepUser.uf}</Text>
              </View>
            }
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        marginTop: 25,
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        width: '90%',
        padding: 10,
        fontSize: 18
    },
    view: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    botao: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000'
    },
    textBotao: {
        color: '000'
    },
    viewResultado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultadoText: {
        fontSize: 20
    }
})

