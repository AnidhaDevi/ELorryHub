import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ProfileScreen from '../Screens/profile_';
import MyloadsScreen from '../Screens/Myloads';
import PostTruckScreen from '../Screens/PostTruck';
import Mytrucks from '../Screens/Mytrucks';

 import Editprofile from '../Screens/Editprofile';
// import FirstScreen from '../Screens/FirstScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
       
            <Tab.Navigator>
                <Tab.Screen name="Home" options={{ headerShown: false }} component={ ProfileScreen } />
                <Tab.Screen name="Profile" options={{ headerShown: false }} component={ Editprofile } />
                <Tab.Screen name="Myloads" options={{ headerShown: false }} component={ MyloadsScreen } />
                <Tab.Screen name="PostTruck" options={{ headerShown: false }} component={ PostTruckScreen } />
                <Tab.Screen name="Mytrucks" options={{ headerShown: false }} component={ Mytrucks } />
            </Tab.Navigator>

    );
}

export default Tabs;