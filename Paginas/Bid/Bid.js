import React from 'react'
import{ AsyncStorage,View, Text,Button } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';

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
        <View>
          <Text> Tela Bid Screnn</Text>
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
  export default Bid;