import React from 'react'
import{ AsyncStorage,View, Text ,ScrollView,Switch} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import style from '../../assets/style/style';
import color from '../../assets/style/color';
import {Header,Button,List,ListItem} from 'react-native-elements';
import {bid} from '../../Services/Meses';
import {createStackNavigator} from 'react-navigation';
import RespostaBid from './RespostaBid';
import ExibiBid from './ExibiBid';

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