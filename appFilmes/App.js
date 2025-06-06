import React, {useEffect,useState} from 'react';
import { View,Text, StyleSheet,FlatList, ActivityIndicator} from 'react-native';

import api from './src/services/api';
import Filmes from './src/Filmes';
import Detalhes from './src/Detalhes';


export default function App (){

    const [filmes, setFilmes] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect( () =>{
      async function loadFilmes() {
        const response = await api.get('r-api/?api=filmes')
        setFilmes(response.data)
        setLoading(false);
      }
      loadFilmes();

    }, []);

    if (loading){
      return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator color='#121212' size={45}/>
        </View>
      )
    } else {
      return (
        <View>
          <FlatList 
           data={filmes}
           keyExtractor={item => String(item.id)}
           renderItem={ ({item}) => <Filmes data={item} />}/>
        </View>
      )
    }
    
}