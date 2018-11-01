import React from 'react'
import{ View, Text,Button,AsyncStorage} from 'react-native';
import {createDrawerNavigator,createTabNavigator,createStackNavigator} from 'react-navigation';
import {Header } from 'react-native-elements'
import {FontAwesome } from '@expo/vector-icons';
import styles from '../../assets/style/style';
import color from '../../assets/style/color';


class Mensalidade extends React.Component {
  static navigationOptions = {
    title:'Mensalidade',
    header:{
      backgroundColor:'#fff',
    },
    tabBarIcon: ({focused}) => (
      <FontAwesome
          name='money'
          size={26}
          style={{ color: focused ? '#000' : '#949494'}}
      />
    ),
  };  
  render(){
    return(
      <View style={styles.container}>
        <Menu/> 
          </View>
        )
    }
     _logoff = async()=>{
      await AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    }
    _showDetalhes = async()=>{
      this.props.navigation.navigate('Detalhes');
    }
}
class Mes extends React.Component{
   render(){
    return(
        <Mese/>
      
    )
  }
}
class Meses extends React.Component{
  static navigationOptions={
    title:'OLa'
  }
  render(){
    return (
      <View>
      <Text>Pesquisar sobre o dramItem e contentComponent do drawerNavigator</Text>
      </View>
    )
  }
}
 export const Menu = createStackNavigator(
  
  {
    Mes:Mes
  },
  {
    navigationOptions:{
      title:'Mensalidade',
      headerLeft:(
        <FontAwesome name='home' size={50} onPress={()=>this.props.navigation.penDrawer()} />
      ),
      headerStyle:{
        backgroundColor:color.amarelo,
      }
    }
  }
 )
 export const Mese = createDrawerNavigator(
   {
   Meses:Meses
   
 })
export default Mensalidade;