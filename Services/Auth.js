import {AsyncStorage} from 'react-native';

export  const TOKEN_KEY="@Colisao:token";

export const onSignIn = () => AsyncStorage.setItem(TOKEN_KEY,"true");

export const onSingOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export  default isSignedIn = async()=>{
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    return (token !== null) ? true : false;
};