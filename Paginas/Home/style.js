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
        height:200,
        marginTop:5,
        marginBottom:50,
        backgroundColor:'#fff'
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
        paddingLeft: 10,
        fontSize:23,
        alignSelf:'center'
    },
    data:{
        alignItems:'center',
    }
});
  export default styles;