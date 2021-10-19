import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import InitialScreen from './Screens/Initial';
import LoginScreen from './Screens/Login';
import OTPScreen from './Screens/OTPLogin';
import FirstScreen from './Screens/FirstScreen';
import Registerscreen from './Screens/Register';
import BottomTab from './Screens/BottomTab';
import Homescreen from './Screens/Homescreen';
import Directoryscreen from './Screens/Directory';
import Profilescreen from './Screens/Profile';
import MyLoadsscreen from './Screens/MyLoads';
import MyTrucksscreen from './Screens/MyTrucks';
import PostLoadScreen from './Screens/PostLoad';
import PostTruckScreen from './Screens/PostTruck';

const Navigation = createStackNavigator(
  {
    Initial: {screen: InitialScreen},
    Login: {screen: LoginScreen},
    OTPScreen: {screen: OTPScreen},
    FirstScreen: {screen: FirstScreen},
    Registerscreen: {screen: Registerscreen},
    BottomTab: {screen: BottomTab},
    Homescreen: {screen: Homescreen},
    Directoryscreen: {screen: Directoryscreen},
    Profilescreen: {screen: Profilescreen},
    MyLoadsscreen: {screen: MyLoadsscreen},
    MyTrucksscreen: {screen: MyTrucksscreen},
    PostLoadScreen: {screen: PostLoadScreen},
    PostTruckScreen: {screen: PostTruckScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Initial',
  },
);
const Appcontainer = createAppContainer(Navigation)
export default Appcontainer;

