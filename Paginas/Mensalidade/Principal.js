import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from '../../assets/style/style';
import color from '../../assets/style/color';
import { meses } from '../../Services/Meses';

class Principal extends React.Component{
  static navigationOptions=({
    drawerLabel:null
  })  
  render(){
      return(
        <View style={styles.container}>
          <Text style={styles.texto}>Teste</Text>
          <Button 
            title="Press"
            onPress={()=>this.props.navigation.navigate('Menu')}
            />
      
        </View>
      )
    }
  }

  export default Principal;