import React, {Component} from "react";
import { View,Text,Touchable,Image, StyleSheet, TouchableOpacity } from "react-native";

class Lista extends Component{
    constructor(props){
      super(props);
      this.state = {
            feed: this.props.data
      };

      this.mostrarLikes = this.mostrarLikes.bind(this)
      this.like = this.like.bind(this)
      this.carregaIcone = this.carregaIcone.bind(this)
    }

    mostrarLikes(likers) {
        let feed = this.state.feed;

        if (feed.likers <= 0) {
            return;
        }

        return(
            <Text style={styles.likes}>{feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'}</Text>
        );
    }

    like() {
        let feed = this.state.feed;

        if(feed.likeada == true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    render() {
      return(
        <View style={styles.areaFeed}>
        
          <View style={styles.viewPerfil}>
            <Image 
             style={styles.fotoPerfil}
             source={{uri: this.state.feed.imgPerfil}}
             />

             <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
          </View>

          <Image 
             style={styles.fotoPublicacao}
             source={{uri: this.state.feed.imgPublicacao}}
             resizeMode="cover"/>

         <View style={styles.iconArea}>

            <TouchableOpacity style={styles.iconBtn} onPress={this.like}>
                <Image 
                style={styles.icon}
                source={this.carregaIcone(this.state.feed.likeada)}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
                <Image 
                style={styles.icon}
                source={require('../img/message.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
                <Image 
                style={styles.icon}
                source={require('../img/send.png')}/>
            </TouchableOpacity>
         </View>

         {this.mostrarLikes(this.state.feed.likers)}

         <View style={styles.descricaoView}>
            <Text style={styles.descricaoPost}>{this.state.feed.nome}</Text>
            <Text style={styles.descricaoPost}>{this.state.feed.descricao}</Text>
         </View>
          
        </View>
      )
    }
}

const styles = StyleSheet.create({
    areaFeed: {

    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000000',
        marginStart: 10
    },
    descricaoPost: {
        fontSize: 16
    },
    descricaoView: {
        marginTop: 5,
        marginStart: 10,
        marginBottom: 30
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        marginHorizontal: 0.5
    },
    iconArea: {
        flexDirection: 'row',
        padding: 5
    },
    iconBtn: {
        marginHorizontal: 10
    },
    icon: {
        width: 30,
        height: 30,
    },
    likes: {
        fontWeight: 'bold',
        marginStart: 10
    }
});

export default Lista;