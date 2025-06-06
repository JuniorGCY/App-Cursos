import React, {Component} from "react";
import { View, Text,Image, StyleSheet,TouchableOpacity} from "react-native";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'Vai',
            ultimoScore: null
        };

        //variavel do timer relogio
        this.timer = null;

        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai() {
        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({botao: 'Vai'})
        } else {
            this.timer = setInterval( () => {
                this.setState({numero: this.state.numero + 0.1})
            }, 100);

            this.setState({botao: 'Parar'})
        }
    }

    limpar() {  
        if(this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.setState({
            ultimo: this.state.numero.toFixed(1),
            numero: 0,
            botao: 'Vai'
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./src/cronometro.png')} style={styles.cronometro}/>

                <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.botao} onPress={this.vai}>
                        <Text style={styles.btnTexto}>{this.state.botao}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={this.limpar}>
                        <Text style={styles.btnTexto}>Limpar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaUltima}>
                    <Text style={styles.ultimo}> Ultimo Tempo : {this.state.ultimo}</Text>
                </View>
            </View>
            
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00aeef'
    },
    timer: {
        color: '#FFF',
        fontSize: 65,
        marginTop: -160,
        fontWeight: 'bold'
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 90,
        height: 40
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
        backgroundColor: '#FFF',
        height: 40,
        margin: 17,
        borderRadius: 10
    },
    btnTexto: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#00aeef'
    },
    areaUltima: {
        marginTop: 40,

    },
    ultimo: {
        fontSize: 25,
        fontStyle: 'italic',
        color: '#FFF'
    }
});

export default App;