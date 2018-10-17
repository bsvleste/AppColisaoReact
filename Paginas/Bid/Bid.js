import React from 'react'
import{ AsyncStorage,View, Text,Button } from 'react-native';

class Bid extends React.Component{
  static navigationOptions = {
    title:'Bid',
  };

  render(){
      return(
        <View>
          <Text> Bid Screnn</Text>
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