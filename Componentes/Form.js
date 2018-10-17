import React, { Component } from 'react';
import { View,StyleSheet,TextInput,Button } from 'react-native'

class Form extends React.Component {
    render() { 
        return ( 
            <View style={styles.container}>
            <Text>Login Colisao</Text>
            </View>
         );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      color:'white'
    },
});
export default Form;