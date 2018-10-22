import { createStackNavigator, StackNavigator, createSwitchNavigator,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';
import Login from '../Login/Login';
import Bid from '../Paginas/Bid/Bid';
import Mensalidade from '../Paginas/Mensalidade/Mensalidade';
import Home from  '../Paginas/Home/Home';
import Registro from '../Paginas/Registro/Registro';
import Resultados from '../Paginas/Resultado/Resultado';
import AutoLoading from '../Login/AutoLoading';
import CadastroUsuario from '../Login/CadastroUsuario';
import color from '../assets/style/color';
import Janeiro  from '../Paginas/Home/menuLateral/Janeiro';
import Fevereiro  from '../Paginas/Home/menuLateral/Fevereiro';
import {FontAwesome } from '@expo/vector-icons';

const RotasNaoAutorizada = createStackNavigator({
          
        Login:Login,
        CadastroUsuario:CadastroUsuario
    });

 const RotasAutorizadas = createBottomTabNavigator({
        Home:Home,
        Bid:Bid,
        Mensalidade:Mensalidade,
        Registro:Registro,
        Resultados:Resultados
 },{
    initialRouteName:'Home',
    tabBarOptions: {
        activeTintColor: '#000',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: color.amarelo ,
        },
      },
      
  });
const Rotas = createSwitchNavigator(
    {
        AutoLoading:AutoLoading,
        Home:RotasAutorizadas,
        Login:RotasNaoAutorizada,
    },
    {
        initialRouteName:'AutoLoading',
    }
);

export default Rotas; 
