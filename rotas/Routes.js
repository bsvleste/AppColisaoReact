import { createStackNavigator, StackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Detalhes from '../Detalhes/Detalhes';
import AutoLoading from '../Login/AutoLoading';
import CadastroUsuario from '../Login/CadastroUsuario';

const RotasNaoAutorizada = createStackNavigator({
          
        Login:Login,
        CadastroUsuario:CadastroUsuario
    },
    {

    
            
});

 const RotasAutorizadas = createStackNavigator({
        Home:Home,
        Detalhes:Detalhes,
        initialRouteName:'Home',
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
