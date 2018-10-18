import React from 'react'
import{ View, Text,Button,AsyncStorage} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';

class Mensalidade extends React.Component {
  static navigationOptions = {
    title:'Mensalidade',
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
          <View>
            <Text>Mensalidade teste Screnn</Text>
            <Button 
              title="Mensalidade"
              onPress={this._showDetalhes}
            />
            <Button 
            title="Sair"
            onPress={this._logoff}
            />
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
 
export default Mensalidade;