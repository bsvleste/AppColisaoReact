import React from 'react'
import{ AsyncStorage,View, Text ,ScrollView,Switch,TouchableHighlight} from 'react-native';
import {FontAwesome } from '@expo/vector-icons';
import style from '../../assets/style/style';
import color from '../../assets/style/color';
import {Header,Button,List,ListItem} from 'react-native-elements';
import {bid} from '../../Services/Meses';
import {createStackNavigator} from 'react-navigation';


class ExibiBid extends React.Component{
    render(){
      return(
        <View style={style.container}>
        
        <ScrollView>
        {bid.map((res)=>(
          <ListItem
            key={res.id}
            title={
              <View style={style.quadro}>
              <FontAwesome
              name={res.bid== 's'?'check-square':'window-close'}
              size={26}
              style={{ color: res.bid == 's' ? 'green' : 'red'}}
          />
              <Text style={{color:res.bid== 's' ? 'green':'red',marginLeft:10}}>{res.nome}</Text>
              </View>
            }
            titleStyle={{color:res.bid == 's' ? 'green': 'red'}}
            
            hideChevron={true}
            containerStyle={{padding:25}}
            />
          
        ))}
        
        </ScrollView>
        <Button 
        title="Bid"
        buttonStyle={style.buttonBid}
        onPress={this._bid}
        />
      </View>
      )
    }
    
    _bid = async()=>{
      this.props.navigation.navigate('RespostaBid');
    };
  }

  export default ExibiBid;