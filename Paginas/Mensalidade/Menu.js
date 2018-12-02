import React from "react";
import {ScrollView, View, Text, Image,SafeAreaView,TouchableHighlight} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import { List,Slider, Card, ListItem} from 'react-native-elements';
import styles from '../../assets/style/style';
import Pagamento from './Pagamento';
class Menu extends React.Component{
  state={
    valor:[],
    preco:0
  }
  getValor =(valor)=>{
    alert(valor)
  }
  componentDidMount(){
    //this.setState({valor:mensalidade})
    
  }
  render(){
    const {id,descricao,mensalidade} =this.props.navigation.state.params;
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={{paddingTop:22}}>                
              {mensalidade.map((n)=>(
                <Card
                key={n.id}>
                <Pagamento jogador={n} />
                
              </Card>
              ))}


            </ScrollView>
        </SafeAreaView>
      )
    }
  }
  export default Menu;