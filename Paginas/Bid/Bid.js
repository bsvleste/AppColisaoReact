import React from 'react'
import{ AsyncStorage,View, Text ,ScrollView,Switch} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import style from '../../assets/style/style';
import color from '../../assets/style/color';
import {Header,Button,List,ListItem} from 'react-native-elements';
import {bid} from '../../Services/Meses';
import {createStackNavigator} from 'react-navigation';

class Bid extends React.Component{
  static navigationOptions = {
    title:'Bid',
    tabBarIcon: ({focused}) => (
      <FontAwesome
          name='pencil'
          size={26}
          style={{ color: focused ? '#000' : '#949494'}}
      />
    ),
  };
  render(){
      return(
        <PaginaBid/>
      )
    }
    _home = async ()=>{
      bid.push({id:1,Nome:'Lennon',bid:'s'});
      
    };
    _logoff = async()=>{
      this.props.navigation.navigate('ExibiBid');
    };
  } 

  class RespostaBid extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        switchValue:false,
        switchValueFalse:false
      }
   }
   toggleButton = ()=>{
     const valor={bid:''};
     if(this.state.switchValue){
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
      <View>
        <Switch 
        onValueChange={(switchValue)=> this.setState({switchValue,switchValueFalse:false })}
        value={this.state.switchValue}
        />
      <FontAwesome
      name='check-square'
      size={26}
      style={{color:'green'}}
      />
      </View>
      <View>
      <Switch 
      onValueChange={(switchValueFalse)=> this.setState({switchValueFalse,switchValue:false })}
      value={this.state.switchValueFalse}
    />
    <FontAwesome
    name='window-close'
    size={26}
    style={{color:'red'}}
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
  class ExibiBid extends React.Component{
    render(){
      return(
        <View style={style.container}>
        
        <ScrollView>
        {bid.map((res)=>(
          <ListItem
            key={res.id}
            title={
              <View style={style.quadro}>
              <FontAwesome
              name={res.bid== 's'?'check-square':'window-close'}
              size={26}
              style={{ color: res.bid == 's' ? 'green' : 'red'}}
          />
              <Text style={{color:res.bid== 's' ? 'green':'red',marginLeft:10}}>{res.nome}</Text>
              </View>
            }
            titleStyle={{color:res.bid == 's' ? 'green': 'red'}}
            
            hideChevron={true}
            containerStyle={{padding:25}}
            />
          
        ))}
        
        </ScrollView>
        <Button 
        title="Bid"
        buttonStyle={style.buttonBid}
        onPress={this._bid}
        />
          </View>
      )
    }
    
    _bid = async()=>{
      this.props.navigation.navigate('RespostaBid');
    };
  }

  export const ButtonSwitch = (props) =>{
    return (
      <View>
        <View>  
          <Switch 
            onValueChange={props.toggleButton}
            value={props.switchValue}
          />
          <FontAwesome
          name={props.name}
          size={26}
          style={{color:props.color}}
          /> 
        </View>
        
      </View>
    )
  }
  export const PaginaBid = createStackNavigator({
    
    ExibiBid:{
      screen:ExibiBid,
      navigationOptions:{
        title:'BID',
        headerStyle:{
          backgroundColor:color.amarelo,
        }
      }
      
    },
    RespostaBid:{
      screen:RespostaBid,
      navigationOptions:{
        title:'Resposta Bid',
        headerStyle:{
          backgroundColor:color.amarelo,
        }
      },
    }
    
     
  })
  export default Bid;