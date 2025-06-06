import React,{useState} from "react";
import { View,Text,StyleSheet, Image, TouchableOpacity, Modal} from "react-native";
import Detalhes from "../Detalhes";

export default function Filmes({ data}) {

    const [visibleModal, setvisibleModal] = useState(false);

    return (
        <View>

            <View style={styles.card}>
                <Text style={styles.tituloFilme}>{data.nome}</Text>
                <Image 
                 source={{ uri: data.foto}}
                 style={styles.imagemFilme}/>
                 
                 <View style={styles.areaBotao}>
                    <TouchableOpacity style={styles.botao} onPress={ () => setvisibleModal(true)}>
                        <Text style={styles.textBotao}>Leia mais</Text>
                    </TouchableOpacity>
                 </View>
            </View>

            <Modal animationType="slide" visible={visibleModal} transparent={true}>
                <Detalhes filme={data} voltar={ () => setvisibleModal(false)}/>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2
    },
    tituloFilme: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold'
    },
    imagemFilme: {
        height: 250,
        zIndex: 2
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex:3
    },
    botao: {
        width: 100,
        backgroundColor: '#09A6FF',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    textBotao: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    }
})