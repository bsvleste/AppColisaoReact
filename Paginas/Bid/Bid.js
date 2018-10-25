import React from 'react'
import{ AsyncStorage,View, Text } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import style from '../../assets/style/style';
import color from '../../assets/style/color';
import {Header,Button} from 'react-native-elements';

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
        <View style={style.container}>
          <Header
            backgroundColor={color.amarelo} 
            centerComponent={{text:"BID",style:{color:'#000'}}}
          />
          <Text style={{backgroundColor:'#fff'}}> Tela Bid Screnn</Text>
          <Button 
            title="Bid"
            buttonStyle={style.buttonBid}
            onPress={this._home}
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