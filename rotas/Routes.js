import { createStackNavigator, StackNavigator, createSwitchNavigator,createBottomTabNavigator } from 'react-navigation';
import Login from '../Login/Login';
import Bid from '../Paginas/Bid/Bid';
import Mensalidade from '../Paginas/Mensalidade/Mensalidade';
import Home from  '../Paginas/Home/Home';
import Registro from '../Paginas/Registro/Registro';
import Resultados from '../Paginas/Resultado/Resultado';
import AutoLoading from '../Login/AutoLoading';
import CadastroUsuario from '../Login/CadastroUsuario';

const RotasNaoAutorizada = createStackNavigator({
          
        Login:Login,
        CadastroUsuario:CadastroUsuario
    });

 const RotasAutorizadas = createBottomTabNavigator({
        Home:Home,
        Mensalidade:Mensalidade,
        Bid:Bid,
        Registro:Registro,
        Resultados:Resultados
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
