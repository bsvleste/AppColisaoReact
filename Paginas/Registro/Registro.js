import React from 'react'
import{ AsyncStorage,View, Text,Button } from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';

class Registro extends React.Component{
  static navigationOptions = {
    title:'Registro',
    tabBarIcon: ({focused}) => (
      <MaterialCommunityIcons
          name='format-list-checks'
          size={26}
          style={{ color: focused ? '#000' : '#949494'}}
      />
    ),
  };
  render(){
      return(
        <View>
          <Text> Registro Screnn</Text>
          <Button 
            title="Bid"
            onPress={this._home}
            />
            <Button 
              title="Sair"
              onPress={this._logoff}
            />
        </View>
      )
    }
    _home = async ()=>{
      this.props.navigation.navigate('Mensalidade')
    };
    _logoff = async()=>{
      await AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    };
  } 
  export default Registro;