import React from 'react'
import{ View, Text,Button,AsyncStorage} from 'react-native';

class Home extends React.Component {
    render(){
        return(
          <View>
            <Text> Home Screnn</Text>
            <Button 
              title="Detalhes"
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
 
export default Home;