import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { auth } from './src/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth';

import FormUser from './src/FormUser';


export default function App() {

  const [email,setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [userAuth, setUserAuth] = useState(null)
  const [warning,setWarning] = useState("");
  const [load, setLoad] = useState(true);

  useEffect ( () => {
    const unsub = onAuthStateChanged(auth,  (user) => {
      if (user) {
        setUserAuth({
          email: user.email,
          uid: user.uid
        })

        setLoad(false)
      } else {
        setUserAuth(null);
        setLoad(false)
      }
    })
  }, [])

  async function handleCreateUser() {
    try {
      const userr = await createUserWithEmailAndPassword(auth,email,senha)
      setWarning("Usuario cadastrado com sucesso")
    } 
    catch (error) {
        switch (error.code) {
          case 'auth/missing-password':
            setWarning('A senha é obrigatoria');
            break;
          case 'auth/invalid-email':
            setWarning('O email digitado é invalido')
            break;
          case 'auth/email-already-in-use':
            setWarning('Este e-mail já está cadastrado')
            break;
          default:
            setWarning('Erro desconhecido' + error.message)
        }
    }
  }

  async function handleLogin() {
    try {
      const user = await signInWithEmailAndPassword(auth,email,senha)
      setWarning("Usuario autenticado")
    }
    catch (error) {
        switch (error.code) {
          case 'auth/missing-password':
            setWarning('A senha é obrigatoria');
            break;
          case 'auth/invalid-email':
            setWarning('O email digitado é invalido')
            break;
          case 'auth/user-not-found':
            setWarning('Usuario não encontrado')
            break;
          case 'auth/wrong-password':
            setWarning('Senha incorreta')
            break;
          case 'auth/email-already-in-use':
            setWarning('Este e-mail já está cadastrado')
            break;
          default:
            setWarning('Erro desconhecido' + error.message)
        }
      }
  }

  async function handleLougOut() {
    await signOut(auth)
    setUserAuth(null)
  }

  if (userAuth) {
    return (
      <View style={styles.container}>
        <FormUser />
      </View>
    )
  }

  return (
    <View style={styles.container}> 
      {userAuth && (
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> Usuario: {userAuth.email} </Text>
      )}
      <Text style={{fontSize: 26, fontWeight: 'bold'}}> Email:</Text>
      <TextInput 
       style={styles.editText}
       value={email}
       placeholder='Digite seu email'
       onChangeText={ (texto) => setEmail(texto)}/>

      <Text style={{fontSize: 26, fontWeight: 'bold'}}> Senha:</Text>
      <TextInput 
       style={styles.editText}
       value={senha}
       placeholder='Digite sua senha'
       secureTextEntry={true}
       onChangeText={ (texto) => setSenha(texto)}/>

       <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
        <Text>Cadastrar</Text>
       </TouchableOpacity>

       {userAuth && (
        <TouchableOpacity style={styles.button} onPress={handleLougOut}>
        <Text>Sair da conta</Text>
       </TouchableOpacity>
       )}

       <Text style={styles.warningText}>
        {warning}
       </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  editText: {
    margin: 5,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10
  },
  button: {
    marginTop: 10,
    marginStart: 60,
    marginEnd: 60,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10
  },
  warningText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20
  }
})