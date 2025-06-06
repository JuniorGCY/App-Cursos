import React, {useEffect,useRef,useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput, FlatList} from 'react-native';
import { db , auth} from './firebaseConnection';
import {doc, getDoc, onSnapshot, setDoc, collection,addDoc,getDocs, updateDoc} from 'firebase/firestore'
import {signOut} from 'firebase/auth'

import Component from './component';

export default function FormUser() {

  const [nome,setNome] = useState("")
  const [iddade, setIddade] = useState("")
  const [cargo, setCargo] = useState("")
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState({});
  const [isEditting, setIsEditting] = useState("")

  useEffect ( () => {
    async function getData() {
      const usersRef = collection(db,"users");

      onSnapshot(usersRef,  (snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            iddade: doc.data().iddade,
            cargo: doc.data().cargo
          })
        })
        setUsers(lista);
      })

      /*await getDocs(usersRef)
      .then ((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo
          })
        })

        setUsers(lista);
      })
      .catch ((error) => {
        console.log(error);
      })*/
    }

    getData();
  }, [])

  async function handleRegister() {
    await addDoc(collection(db, "users"), {
      nome: nome,
      iddade: iddade,
      cargo: cargo
    })
    .then( () => {
      console.log("Cadastrado com sucesso")
      setNome("")
      setIddade("")
      setCargo("")
    })
    .catch( (error) => {
      console.log(error)
    })
  }

  function editUser(data) {
    setNome(data.nome)
    setIddade(data.iddade)
    setCargo(data.cargo)
    setIsEditting(data.id)
  }

  async function handleEditUser() {
    const docRef = doc(db, "users",isEditting)
      await updateDoc(docRef, {
        nome: nome,
        iddade: iddade,
        cargo: cargo
      })
      setNome("")
      setIddade("")
      setCargo("")
      setIsEditting("")
  }

  function handleToggle() {
    setShowForm(!showForm);
  }

  async function handleLogOut() {
    await signOut(auth)
  }

  return (
    <View style={styles.container}>
      {showForm && (
        <View>
          <Text style={{marginStart: 10}}>Nome: {nome}</Text>
          <TextInput 
            style={styles.TextInput}
            placeholder='Digite seu nome'
            value={nome}
            onChangeText={ (text) => setNome(text)}/>

          <Text style={{marginStart: 10}}>Idade:  {iddade}</Text>
          <TextInput 
            style={styles.TextInput}
            placeholder='Digite sua idade'
            value={iddade}
            onChangeText={ (text) => setIddade(text)}/>

          <Text style={{marginStart: 10}}>Cargo: {cargo}</Text>
          <TextInput 
            style={styles.TextInput}
            placeholder='Digite seu cargo'
            value={cargo}
            onChangeText={ (text) => setCargo(text)}/> 

          {isEditting !=="" ? (
            <TouchableOpacity style={styles.button} onPress={handleEditUser}>
             <Text style={styles.buttonText}>Editar </Text>
          </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
             <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          )}
          
        </View>
      )}

          <TouchableOpacity style={styles.button} onPress={handleToggle}>
            <Text style={styles.buttonText}>
              {showForm ? "Esconder formulário" : "Mostrar formulário"}
            </Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={handleLogOut}>
            <Text style={styles.buttonText}>Deslogar</Text>
          </TouchableOpacity>

          <FlatList 
          style={styles.list}
           data={users}
           keyExtractor={(item) => String(item.id)}
           renderItem={ ({item}) => <Component data={item} handleEdit={ (item) => editUser(item)}/>}
           />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: '#000',
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  buttonText: {
    padding: 8,
    color: "#FFF",
    textAlign: 'center'
  },
  TextInput: {
    borderWidth: 2,
    margin: 10
  },
  list: {
    margin: 10
  }
})