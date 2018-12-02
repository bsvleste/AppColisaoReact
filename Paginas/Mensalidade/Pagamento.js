import React from 'react'
import {View,Text,TouchableOpacity,Slider} from 'react-native';
import styles from '../../assets/style/style';
import { Button } from 'react-native-elements';

class Pagamento extends React.Component {
    state = { 
        valor:0,
        nome:'',
     }
     componentDidMount(){
        const {jogador} = this.props;
        this.setState({valor:jogador.valor,nome:jogador.nome});
  }

     getValor =(valor)=>{
        this.setState({valor:valor})
      }     
      
        render() { 
            return ( 
            <View style={{paddingTop:28}}>
                <Text style={{color:'green'}}>{this.state.nome}</Text>
                <Slider
                    step={1}
                    style={{width:300}}
                    maximumValue={100}
                    minimumValue={0}
                    value={this.state.valor}
                    onValueChange={valor=>this.getValor(valor)}
                />
                <Text style={{color:'green'}}>{this.state.valor}</Text>
                <View>

                <Button 
                    title="salvar"
                    onPress={()=>alert(this.state.valor)}
                    />       
                </View>
                    </View>
         );
    }

}
 
export default Pagamento;