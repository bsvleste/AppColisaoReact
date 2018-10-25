import {StyleSheet } from  'react-native'
import color from '../../assets/style/color';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: color.bgColor,
        paddingTop: 22,
        height:120,  
    },
    scroll:{    
        marginBottom:-1,
    },
    exibirTexto:{
        marginTop:5,
        marginBottom:50,
    },
    quadro:{
        flexDirection:'row',
        marginTop:8
    },
    img:{
        height:80,
        width:80,
        borderRadius:50,
        marginLeft:10
    },
    texto:{
        fontSize:20,
        alignSelf:'center'
    },
    data:{
        alignItems:'center',
    },
    /*style do bid*/ 
    buttonBid:{
        backgroundColor: color.amarelo,
        width: 60,
        height: 60,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 100,
        alignSelf:'center',
        marginTop:400,
      },
});
  export default styles;