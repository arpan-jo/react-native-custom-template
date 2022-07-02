import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';
import Explore from '../screen/others/Explore';
import BottomTabNavigation, {BottomTabParams} from './BottomTabNavigation';
import CustomDrawer from './CustomDrawer';
import TopTabNavigation, {TopTabParams} from './TopTabNavigation';

export type DrawerStackParams = {
  Home?: undefined;
  ['Bottom Tab']?: NavigatorScreenParams<BottomTabParams>;
  'Top Tab'?: NavigatorScreenParams<TopTabParams>;
};

const DrawerNavigation = () => {
  const {Navigator, Screen} = createDrawerNavigator<DrawerStackParams>();
  return (
    <Navigator
      screenOptions={{lazy: true}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Screen
        name="Home"
        component={Explore}
        options={{drawerIcon: () => 'dashboard'}}
      />

      <Screen
        name="Bottom Tab"
        component={BottomTabNavigation}
        options={{drawerIcon: () => 'view-sidebar'}}
      />

      <Screen
        name="Top Tab"
        component={TopTabNavigation}
        options={{drawerIcon: () => 'view-sidebar'}}
      />
    </Navigator>
  );
};

export default DrawerNavigation;
