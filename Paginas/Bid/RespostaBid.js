import React from 'react'
import{ AsyncStorage,View, Text ,ScrollView,Switch} from 'react-native';
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
            <View style={{padding:50}}>
                <Switch 
                onValueChange={(confirmado)=> this.setState({confirmado,negado:false })}
                value={this.state.confirmado}
                />
                <FontAwesome
                name='check-square'
                size={26}
                style={{color:this.state.confirmado == true ? 'green': 'gray'}}
                /> 
        </View>
      <View style={{padding:50}}>
      <Switch 
      onValueChange={(negado)=> this.setState({negado,confirmado:false })}
      value={this.state.negado}
    />
    <FontAwesome
    name='window-close'
    size={26}
    style={{color:this.state.negado == true? 'red' : 'gray'}}
    />
      </View>
        <Button
        title='Enviar'
        onPress={this.toggleButton}
        />
        </View>
      )
    }
  }
  export default RespostaBid;