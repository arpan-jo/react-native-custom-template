import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import TopTabOne from '../screen/topTab/TopTabOne';
import TopTabThree from '../screen/topTab/TopTabThree';
import TopTabTwo from '../screen/topTab/TopTabTwo';

export type TopTabParams = {
  TopTabOne: undefined;
  TopTabTwo: undefined;
  TopTabThree: undefined;
};

const TopTabNavigation = () => {
  const {Navigator, Screen} = createMaterialTopTabNavigator<TopTabParams>();
  return (
    <Navigator
      initialRouteName="TopTabOne"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Screen
        name="TopTabOne"
        component={TopTabOne}
        options={{
          // tabBarIcon: ({color, size}) => (
          //   <ExploreIcon color={color} size={size} />
          // ),
          tabBarLabel: 'Tab One',
        }}
      />

      <Screen
        name="TopTabTwo"
        component={TopTabTwo}
        options={{
          // tabBarIcon: ({color, size}) => (
          //   <ExploreIcon color={color} size={size} />
          // ),
          tabBarLabel: 'Tab Two',
        }}
      />
      <Screen
        name="TopTabThree"
        component={TopTabThree}
        options={{
          // tabBarIcon: ({color, size}) => (
          //   <ExploreIcon color={color} size={size} />
          // ),
          tabBarLabel: 'Tab Three',
        }}
      />
    </Navigator>
  );
};

export default TopTabNavigation;

// const styles = StyleSheet.create({});
