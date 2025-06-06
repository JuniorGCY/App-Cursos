import React, {Component}from 'react';
import { View,Text,StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native';

import Lista from './src/Lista';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
       {
        id: '1',
        nome: "Bolsonaro",
        descricao: 'Ninguém vai pegar meu telefone!',
        imgPerfil: 'https://th.bing.com/th/id/OIP.3nRnqzZ-TLgrDvyR-_M8xwHaFj?w=1200&h=899&rs=1&pid=ImgDetMain',
        imgPublicacao: 'https://th.bing.com/th/id/OIP.3nRnqzZ-TLgrDvyR-_M8xwHaFj?w=1200&h=899&rs=1&pid=ImgDetMain',
        likeada: false, 
        likers: 50000
       },
       {
        id: '2',
        nome: 'Lula',
        descricao: 'O Bolsonaro quer destruir o que nós destruimos',
        imgPerfil: 'https://http2.mlstatic.com/carimbo-lula-preso-ou-bolsonaro-2018-tamanho-5x2-madeira-D_NQ_NP_657133-MLB27433112465_052018-F.jpg',
        imgPublicacao: 'https://portaldeolho.com.br/wp-content/uploads/2021/11/Lula.jpg',
        likeada: false,
        likers: 10
       },
       {
        id: '3',
        nome: 'Dilma Ruufesedwedaw',
        descricao: 'Pioneira na estocação de vento',
        imgPerfil: 'https://fotos.jornaldacidadeonline.com.br/uploads/fotos/1517378981_5a715da5665f4.jpeg',
        imgPublicacao: 'https://th.bing.com/th/id/OIP.FKkup2upif_E40LYa7-fIgHaGI?rs=1&pid=ImgDetMain',
        likeada: false,
        likers: 1
       },
       {
        id: '4',
        nome: 'Nikolas Ferreira',
        descricao: 'Vem x1 no argumento',
        imgPerfil: 'https://s.yimg.com/ny/api/res/1.2/S91Sl6.uJCicjQS03ucvNw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ5Mw--/https://media.zenfs.com/en/lanacion.com.ar/5fd853976a55188bf37aec1da16600cc',
        imgPublicacao: 'https://www.infomoney.com.br/wp-content/uploads/2025/01/nikolas-ferreira.jpg?w=826&quality=70&strip=all',
        likeada: false,
        likers: 30000000
       }
      ]
    };
  }

  render() {
    return(
      <View style={styles.container}>
        
        <View style={styles.header}>
          <TouchableOpacity>
          <Image 
           source={require('./src/img/logo.png')}
           style={styles.logo}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image 
           source={require('./src/img/send.png')}
           style={styles.send}/>
          </TouchableOpacity>
        </View>

        <FlatList 
         showsHorizontalScrollIndicator={false}
         keyExtractor={ (item) => item.id}
         data={this.state.feed}
         renderItem={ ({item}) => <Lista data={item}/>}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send: {
    width: 23,
    height: 23
  }
})

export default App;