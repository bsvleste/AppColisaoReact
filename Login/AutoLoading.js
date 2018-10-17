import React , { Component} from 'react';
import {AsyncStorage,StatusBar,ActivityIndicator,StyleSheet,View} from 'react-native';

class AutoLoading extends Component {
    state = {  }
    constructor(){
        super();
        this._bootstrapAsync();
    }
    _bootstrapAsync = async()=>{
        const tokenUsuario = await AsyncStorage.getItem('tokenUsuario');
        //alert(tokenUsuario);
        this.props.navigation.navigate(tokenUsuario? 'Home':'Login');
    }
    render() { 
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default"/>
            </View>
          );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
   });
  
export default AutoLoading;