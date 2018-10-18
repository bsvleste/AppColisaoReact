import React from 'react'
import{ AsyncStorage,View, Text,Button } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';

class Resultado extends React.Component{
  static navigationOptions = {
    title:'Resultado',
    tabBarIcon: ({focused}) => (
      <FontAwesome
          name='soccer-ball-o'
          size={26}
          style={{ color: focused ? '#000' : '#949494'}}
      />
    ),
  };
  render(){
      return(
        <View style={{paddingTop:22} }>
          <Text> Resultado Screnn</Text>
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
  export default Resultado;