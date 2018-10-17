import React from 'react'
import{ AsyncStorage,View, Text,Button } from 'react-native';

class Detalhes extends React.Component{
  static navigationOptions = {
    title:'DEtalhes',
  };

  render(){
      return(
        <View>
          <Text> Detalhes Screnn</Text>
          <Button 
            title="Detalhes again"
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
      this.props.navigation.navigate('Home')
    };
    _logoff = async()=>{
      await AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    };
  } 
  export default Detalhes;