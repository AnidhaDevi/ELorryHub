import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import InitialScreen from './Screens/Initial';
import LoginScreen from './Screens/Login';
import OTPScreen from './Screens/OTPLogin';
import FirstScreen from './Screens/FirstScreen';
import PostTruckScreen from './Screens/PostTruck';

const Navigation = createStackNavigator({

  Initial: { screen: InitialScreen },
  Login: { screen: LoginScreen },
  OTPScreen: { screen: OTPScreen },
  FirstScreen: { screen: FirstScreen },
  PostTruck: { screen: PostTruckScreen },

},
  {
    headerMode: 'none',
    initialRouteName: 'Initial'
  }
)
const Appcontainer = createAppContainer(Navigation)
export default Appcontainer;

