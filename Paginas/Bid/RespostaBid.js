import React from 'react'
import{ AsyncStorage,View, Text ,ScrollView,Switch,TouchableHighlight} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import style from '../../assets/style/style';
import color from '../../assets/style/color';
import {Header,Button,List,ListItem} from 'react-native-elements';
import {bid} from '../../Services/Meses';
import {createStackNavigator} from 'react-navigation';

class RespostaBid extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        confirmado:false,
        negado:false
      }
   }
   toggleButton = ()=>{
     const valor={bid:''};
     if(this.state.confirmado){
        valor.bid = 's';
      alert('Confirmado' +valor.bid);
    }else{
        valor.bid = 'n';
      alert('Negado' + valor.bid);
     }
   }
    render(){
      return(
        <View style={style.container}>
            <View style={style.respostaBid}>
                <FontAwesome
                name='check-square'
                size={55}
                style={{color:this.state.confirmado == true ? 'green': 'gray'}}
                
                /> 
                <Switch 
                onValueChange={(confirmado)=> this.setState({confirmado,negado:false })}
                value={this.state.confirmado}
                thumbTintColor={this.state.confirmado ? 'green':'gray'}
                onTintColor={color.confirmado}
                style={style.swicthStyle}
                tintColor={color.desativado}
                
                />
            </View>
            <View style={style.respostaBid}>
              <FontAwesome
              name='window-close'
              size={50}
              style={{color:this.state.negado == true? 'red' : 'gray'}}
              />
              <Switch 
              onValueChange={(negado)=> this.setState({negado,confirmado:false })}
              thumbTintColor={this.state.negado ? 'red':'gray'}
              value={this.state.negado}
              onTintColor={color.negado}
              tintColor={color.desativado}
              style={style.swicthStyle}
              />
            </View>
            <TouchableHighlight style={style.btnResposta} onPress={this.toggleButton}>
              <Text>Enviar</Text>
            </TouchableHighlight >
        </View>
      )
    }
  }
  export default RespostaBid;