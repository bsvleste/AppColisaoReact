import React from 'react'
import{ View, Text,Button,AsyncStorage,ScrollView,Image,FlatList} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import styles from './style';
import {createDrawerNavigator,createTabNavigator} from 'react-navigation';
class Home extends React.Component {
  static navigationOptions = {
    title:'Home'
    ,
    header:{
      backgroundColor:'#fff',
    },
    tabBarIcon: ({focused}) => (
      <FontAwesome
          name='home'
          size={26}
          style={{ color: focused ? '#000' : '#949494'}}
      />
    ),
  };
  
  render(){
        return(
          <View style={styles.container}>
          <Meses/>
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
class MostraJogo extends React.Component {
  
    mostraTexto(){
      let texto = [];
      let img = '../../assets/img/logoColisao.png';
  
      for(var i=0;i <4;i++)
      {
        texto.push(
          <View key={`story-${i}`} style={styles.exibirTexto}>
            
            <View style={styles.data}>
            <Text>Data 03/04/20118</Text>
            </View>
            
            <View style={styles.quadro}>
            <Text style={styles.texto}>2 Quadro</Text>
            <Image source={require(img)} style={styles.img}/>
            <Text style={styles.texto}>5 x 0</Text>
            <FontAwesome
            name='home'
            size={50}
            
            />
            </View>
            <View style={styles.quadro}>
            <Text style={styles.texto}>1 Quadro</Text>
            <Image source={require(img)} style={styles.img}/>
            <Text style={styles.texto}>5 x 0</Text>
            <FontAwesome
            name='home'
            size={50}
            
            />
            </View>
  
          </View>
        )
      }
      return texto;
    }
  render() {
      return (
          <ScrollView style={styles.scroll}>
          {this.mostraTexto()}
         </ScrollView >
      );
  }
}
class Fevereiro extends React.Component {
  static navigationOptions ={
    drawerLabel:this._
  }
  render() {
      return (
         <View>
           <MostraJogo/>
         </View>
      );
  }
}
class Janeiro extends React.Component {
  
  render() {
      return (
         <View>
           <MostraJogo />
         </View>
      );
  }
}

export const Meses = createTabNavigator({
  
  Janeiro:Janeiro,
  Fevereiro:Fevereiro,
})
export default Home;