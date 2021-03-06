import React from 'react'
import { StyleSheet,View,Text,Button ,AsyncStorage,TextInput,TouchableHighlight } from 'react-native';
import color from '../assets/style/color';

class CadastroUsuario extends React.Component {
    static navigationOptions = ({navigation})=>({
        title:'Cadastro Usuario',
        headerStyle:{
            backgroundColor:color.amarelo,
        }
    });
    constructor(props){
        super(props);
        this.state = {
            tokenUsuario:'',
        }
    }
    render() { 
        return (
            <View style={styles.container}>
            <View style={styles.formulario}>
            <TextInput 
                style={styles.input}
                placeholder="Nome"
                underlineColorAndroid = "transparent"
                />
                <TextInput 
                style={styles.input}
                placeholder="Email"
                underlineColorAndroid = "transparent"
                />
                <TextInput  
                style = {styles.input}
                placeholder="Senha"
                returnKeyLabel={"next"}
                onChangeText={(text)=>this.setState({tokenUsuario:text})}
                underlineColorAndroid = "transparent"
                secureTextEntry={true}
                />    
                <TouchableHighlight style={styles.btnLogin} onPress={this.cadastrar}>
                    <Text style={styles.text}>Enviar</Text>
                </TouchableHighlight >
                </View>
            </View>            
          );
    }
    cadastrar =() => {
        this.props.navigation.navigate('Login');
        //this.setState({tokenUsuario:'abc'});
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
      justifyContent:'center',
    },
    formulario:{
        
        alignItems: 'center',
        height:200,
        justifyContent:'space-between'
    },
    text:{
        color:"#000",
    },
    input:{
        width:"90%",
        height:40,
        borderBottomWidth: 4,
        borderBottomColor: color.amarelo,
        color:"#fff",
    },
    btnLogin:{
        backgroundColor:color.amarelo,
        marginTop: 20,
        padding: 15,
        width:"90%",
        alignItems: 'center',    
    }
   });
 
export default CadastroUsuario;