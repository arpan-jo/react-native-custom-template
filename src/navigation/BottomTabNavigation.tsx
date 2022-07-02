import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabOne from '../screen/bottom/TabOne';
import TabThree from '../screen/bottom/TabThree';
import TabTwo from '../screen/bottom/TabTwo';
// import {StyleSheet} from 'react-native';

export type BottomTabParams = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

const BottomTabNavigation = () => {
  const {Navigator, Screen} = createBottomTabNavigator<BottomTabParams>();
  return (
    <Navigator
      initialRouteName="TabOne"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Screen
        name="TabOne"
        component={TabOne}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="eye" size={size} color={color} />
          ),
          tabBarLabel: 'Tab One',
        }}
      />

      <Screen
        name="TabTwo"
        component={TabTwo}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="gesture-two-double-tap" color={color} size={size} />
          ),
          tabBarLabel: 'Tab Two',
        }}
      />

      <Screen
        name="TabThree"
        component={TabThree}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="access-point-network" color={color} size={size} />
          ),
          tabBarLabel: 'Tab Three',
        }}
      />
    </Navigator>
  );
};

export default BottomTabNavigation;

// const styles = StyleSheet.create({});
