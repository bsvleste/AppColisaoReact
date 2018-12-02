import React from 'react'
import{ View, Text,Button,AsyncStorage,ScrollView,Image,ViewList,SafeAreaView,Dimensions} from 'react-native';
import {createDrawerNavigator,createStackNavigator,DrawerItems,NavigationActions} from 'react-navigation';
import {Header } from 'react-native-elements'
import {FontAwesome } from '@expo/vector-icons';
import { List,ListItem, Card} from 'react-native-elements';

import styles from '../../assets/style/style';
import color from '../../assets/style/color';
import { meses } from '../../Services/Meses';
import Principal from './Principal';
import Menu from './Menu';
import Pagamento from './Pagamento';

class Mensalidade extends React.Component {
  static navigationOptions = {
    title:'Mensalidade',
    header:{
      backgroundColor:'#fff',
    },
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
      <View style={styles.container}>
        <MenuLateral />       
      </View>
        )
    }     
} 



const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{paddingTop:28}} >
        <Image source={require('../../assets/img/logoColisao.png')} style={styles.img_menu}/>
      </View>
      <ScrollView>
         <List>
         {meses.map((mes)=>(
           <ListItem
           key={mes.id}
           title={mes.descricao}
           onPress={()=>props.navigation.navigate('Menu',{...mes})}
           />  
           
          ))
         }
         </List>      
         </ScrollView>
    </SafeAreaView>
  </ScrollView>
);
const Pag = createStackNavigator({
  Menu:Menu,
  Page:Pagamento
},
{
  
})
const MenuLateral = createDrawerNavigator({
  Principal:Principal,
  Pagamento:Pag,
  
},{
  contentComponent:CustomDrawerContentComponent
})
export default Mensalidade;