import React from 'react';
import { BackHandler } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Home from '../Screens/Homescreen';
import Profile from'../Screens/Profile';
import Directory from '../Screens/Directory';
import MyLoads from '../Screens/MyLoads';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome5';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
const Tab = createBottomTabNavigator(
);
 
export default class BottomTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            deliveryList: [],
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );

    }
    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
    }

    componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
        // this.loadHomeList();
    }

    handleBackButtonClick() {
        BackHandler.exitApp();
        return true;
    }

render() {

 
return (
 
  <NavigationContainer>
        <Tab.Navigator screenOptions={{

            tabBarShowLabel: false,

        }}>
            <Tab.Screen name="Home" options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image
                            source={require('../Images/truck.png')}
                            resizeMode='contain'
                            style={{
                                width: 45,
                                height: 40,
                                tintColor: focused ? '#e32f45' : '#839BDA',
                                marginBottom: 18

                            }}
                        />

                    </View>
                ),
            }} component={Home}

            />


            <Tab.Screen name="MyLoads" options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>


                        <Image
                            source={require('../Images/directory.png')}
                            resizeMode='contain'
                            style={{
                                width: 45,
                                height: 40,
                                tintColor: focused ? '#e32f45' : '#839BDA',
                                marginBottom: 18
                            }}
                        />

                    </View>
                ),
            }} component={MyLoads} />


            {/* <Tab.Screen name="home" options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../Images/plus.png')}
                        resizeMode='contain'
                        style={{
                            width: 60,
                            height: 60,
                            tintColor: focused ? '#e32f45' : '#839BDA',
                            marginBottom: 35

                        }}
                    />
                ),
                // tabBarButton: (props) => (
                //     <CustomTabBarButton {...props}/>
                // )
            }} component={Home} /> */}

            <Tab.Screen name="Profile" options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>


                        <Image
                            source={require('../Images/profile.png')}
                            resizeMode='contain'
                            style={{
                                width: 45,
                                height: 40,
                                tintColor: focused ? '#e32f45' : '#839BDA',
                                marginBottom: 18

                            }}
                        />
                        {/* <Text>Profile</Text> */}
                    </View>
                ),
            }} component={Profile} />

          
        </Tab.Navigator>
</NavigationContainer>
);
}
}