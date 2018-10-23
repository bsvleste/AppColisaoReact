import React from 'react'
import{ View, Text,Button,AsyncStorage,ScrollView,Image,ViewList} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import styles from './style';
import {createDrawerNavigator,createTabNavigator,createStackNavigator} from 'react-navigation';
import { meses } from '../../Services/Meses';
import { List,ListItem} from 'react-native-elements';

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
          <Meses />
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
  mostraResultado = (mes) =>{
    this.props.navigation.navigate('Janeiro',{...mes});
  }
  render() {
      return (
         <ScrollView>         
         
         <List>
         {meses.map((mes)=>(

           <ListItem
           key={mes.id}
           title={mes.descricao}
           onPress={()=>this.mostraResultado(mes)}
           />   
           
          ))
         }
         </List>      
         </ScrollView>
      );
  }
}
class Janeiro extends React.Component {
    render() {
      const {id,descricao} =this.props.navigation.state.params;
      return (
         <View>           
         <Text style={styles.texto}>{descricao}</Text>
         </View>
      );
  }
}

export const Meses = createStackNavigator ({
  Fevereiro:{
    screen:Fevereiro,
    navigationOptions:{
      title:'Resultados dos Jogos',
    },
  },
  Janeiro:{
    screen:Janeiro,
    navigationOptions:({navigation})=>({
      title:`${navigation.state.params.descricao}`,
    })

  }
})
export default Home;