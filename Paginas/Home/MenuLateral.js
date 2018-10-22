import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Janeiro from './menuLateral/Janeiro';
import Fevereiro from './menuLateral/Fevereiro';

const MenuLateral = createDrawerNavigator({
        Janeiro:{screen:Janeiro}
},
{
    drawePosition:'left'
})

export default MenuLateral;