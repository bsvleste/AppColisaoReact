import React from 'react'
import{ View, Text,Button,AsyncStorage,ScrollView,Image,ViewList} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import styles from './style';
import {createDrawerNavigator,createTabNavigator,createStackNavigator} from 'react-navigation';
import { meses } from '../../Services/Meses';
import { List,ListItem, Card} from 'react-native-elements';
import color from '../../assets/style/color';


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
      const {id,descricao,placar} =this.props.navigation.state.params;
      const img = '../../assets/img/logoColisao.png';
      return (
         <ScrollView style={styles.container}>        
         {placar.map((resultado)=>(
          <Card key={`resultado.id`} containerStyle={styles.exibirTexto}>          
          <View style={styles.data}>
          
          <Text>{resultado.data}</Text>
          </View>
          
          <View style={styles.quadro}>
          <Text style={styles.texto}>2 Quadro</Text>
          <Image source={require(img)} style={styles.img}/>
          <Text style={styles.texto}>{resultado.quadro_2.colisao} X {resultado.quadro_2.adversario}</Text>
          <FontAwesome
          name='home'
          size={50}
          
          />
          </View>
          <View style={styles.quadro}>
          <Text style={styles.texto}>1 Quadro</Text>
          <Image source={require(img)} style={styles.img}/>
          <Text style={styles.texto}>{resultado.quadro_1.colisao} X {resultado.quadro_1.adversario}</Text>
          <FontAwesome
          name='home'
          size={50}
          
          />
          </View>

        </Card>
          ))}
         </ScrollView>
      );
  }
}

export const Meses = createStackNavigator ({
  Fevereiro:{
    screen:Fevereiro,
    navigationOptions:{
      title:'Placar dos Jogos',
      headerStyle:{
        backgroundColor:color.amarelo,
      }
    },
  },
  Janeiro:{
    screen:Janeiro,
    navigationOptions:({navigation})=>({
      title:`${navigation.state.params.descricao}`,
      headerStyle:{
        backgroundColor:color.amarelo,
      }
    })

  }
})
export default Home;