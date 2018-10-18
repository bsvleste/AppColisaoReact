import React from 'react'
import { StyleSheet,View,Text,Button ,AsyncStorage,TextInput,TouchableHighlight } from 'react-native';
import color from '../assets/style/color';

class Login extends React.Component {
    static navigationOptions = ({navigation})=>({
        header:null,
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
                <TouchableHighlight style={styles.btnLogin} onPress={this._login}>
                    <Text style={styles.text}>Login</Text>
                </TouchableHighlight >
                </View>
                <Text style={styles.link} onPress={this._cadastroUsuario}>Novo Usuario</Text>                
            </View>            
          );
    }
    _login = async () => {
        const { tokenUsuario} = this.state;
        alert(this.state.tokenUsuario);
        if(tokenUsuario == 'Bruno')
        {
            await AsyncStorage.setItem('tokenUsuario','abc');
            this.props.navigation.navigate('Home');
            //this.setState({tokenUsuario:'abc'});
        }else{
            alert(token);
        }
    }
    _cadastroUsuario =()=>{
        this.props.navigation.navigate('CadastroUsuario');
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
    link:{
        paddingTop: 30,
        paddingRight: 20,
        color:'#fff',
        alignSelf: 'flex-end',
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
        padding: 15,
        width:"90%",
        alignItems: 'center',    
    }
   });
 
export default Login;