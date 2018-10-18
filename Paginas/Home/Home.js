import React from 'react'
import{ View, Text,Button,AsyncStorage,ScrollView } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import styles from './style';

class Home extends React.Component {
  static navigationOptions = {
    title:'Home',
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
          <ScrollView style={styles.scroll} contentInset={{ bottom: 16 }}>
            <View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View>
            <View style={{height:200,width:'90%',backgroundColor:'#f56'}}>
            <Text style={{color:'white',}}>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff'}}>
            <Text>Funfou</Text>
            </View><View style={{height:200,width:'90%',backgroundColor:'#fff',paddingTop:22,backgroundColor:'red',}}>
            <Text>Funfou</Text>
            
            </View>
          </ScrollView >
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