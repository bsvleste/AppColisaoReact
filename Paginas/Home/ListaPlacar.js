import React from 'react';
import {ScrollView, View, Text, Image,SafeAreaView } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import { List,ListItem, Card} from 'react-native-elements';
import styles from '../../assets/style/style';


class ListaPlacar extends React.Component{
    render(){
      const {id,descricao,placar} =this.props.navigation.state.params;
      const img = '../../assets/img/logoColisao.png';
      const n =[];
      return(
        <ScrollView style={styles.container}>
                    
           {placar.map((resultado)=>(
            <Card key={resultado.id} containerStyle={styles.exibirTexto}>          
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
      )
    }
  }

  export default ListaPlacar;