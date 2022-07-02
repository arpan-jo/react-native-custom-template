import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screen/auth/Login';
import User from '../screen/user/User';
import DrawerNavigation, {DrawerStackParams} from './DrawerNavigation';

export type RootStackParamList = {
  Login?: undefined;
  Home?: undefined;
  Drawer?: NavigatorScreenParams<DrawerStackParams>;
  User?: undefined;
};

const RootNavigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Drawer" component={DrawerNavigation} />
      <Screen name="User" component={User} />
    </Navigator>
  );
};

export default RootNavigation;
