import React, {useState, useEffect} from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import MyLoads from '../Screens/MyLoads';
import MyTrucks from '../Screens/MyTrucks';
import {
  Text,
  Image,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      swipeEnabled={true}
      initialRouteName="MyLoadsscreen"
      barStyle={{marginLeft: 10, marginRight: 10}}
      tabBarOptions={{
        showIcon: false,
        scrollEnabled: true,
        activeTintColor: 'black',
        inactiveTintColor: 'black',
        labelStyle: {
          fontSize: 17,
          fontWeight: 'bold',

          alignItems: 'center',

          // marginBottom: -5,
          // marginTop: -10,
        },

        style: {
          width: '130%',
          backgroundColor: 'white',
          justifyContent: 'center',
        },
        indicatorStyle: {
          backgroundColor: 'red',
          height: 3,
        },
      }}>
      <Tab.Screen
        name="MyLoadsscreen"
        component={MyLoads}
        options={{
          tabBarLabel: '     LOAD     ',
          tabBarIcon: ({focused}) => {
            // return (
            //   // <Image
            //   //   source={icons.bidtime}
            //   //   style={{
            //   //     width: wp('7%'),
            //   //     height: hp('5%'),
            //   //     marginTop: -15,
            //   //     // tintColor: focused ? COLORS.primary_light : COLORS.grey,
            //   //     resizeMode: 'contain',
            //   //   }}
            //   // />
            // );
          },
        }}
      />
      <Tab.Screen
        name="MyTrucksscreen"
        component={MyTrucks}
        options={{
          tabBarLabel: 'TRUCK',

          // tabBarIcon: ({focused}) => {
          //   // return (
          //   //   // <Image
          //   //   //   source={icons.completedd}
          //   //   //   style={{
          //   //   //     width: wp('10%'),
          //   //   //     height: hp('5%'),
          //   //   //     marginTop: -15,
          //   //   //     resizeMode: 'contain',
          //   //   //     // tintColor: focused ? COLORS.primary_light : COLORS.grey,
          //   //   //   }}
          //   //   // />
          //   // );
          // },
        }}
      />
    </Tab.Navigator>
  );
}

const TopNavigatorScreen = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FFFFFF', '#FFFFFF']}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: APP_WIDTH,
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'clear',
            padding: 5,
          }}>
          <TouchableOpacity style={{}} onPress={() => this.goBack()}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                paddingTop: 7,
                paddingLeft: 2,
              }}>
              <Image
                style={{width: APP_WIDTH / 15, height: APP_WIDTH / 15}}
                source={require('../Images/ic_menu_home.png')}></Image>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 1,
              marginTop: 3,
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                height: 30,
                marginTop: 5,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '700',
                color: '#3669C9',
              }}>
              Home
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              paddingTop: 7,
              paddingLeft: 2,
            }}>
            <Image
              style={{width: APP_WIDTH / 15, height: APP_WIDTH / 15}}
              source={require('../Images/bell.png')}></Image>
          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          height: 0.2,
          backgroundColor: '#CCCCCC',
        }}
      />
      {/* render tabs */}

      <MyTabs />

      {/* end of tabs */}
    </View>
  );
};

export default TopNavigatorScreen;
