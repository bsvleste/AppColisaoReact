import React from 'react';
import { Button,StyleSheet, Text, View ,TextInput} from 'react-native';
import Rotas from './rotas/Routes';
import isSignedIn from './Services/Auth';
import {RotasNaoAutorizada}  from './rotas/Routes';

export default class App extends React.Component {
  render() {
    return(
        <Rotas />      
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    color:'#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
  ,
  input:{
    backgroundColor:'#fff',
  }
 });
