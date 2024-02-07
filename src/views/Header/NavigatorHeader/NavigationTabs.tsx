import React from 'react';
import HomeView from '../../HomeView/HomeView';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pour vous" component={HomeView} />
      <Tab.Screen name="Abonnements" component={HomeView} />
    </Tab.Navigator>
  );
}
