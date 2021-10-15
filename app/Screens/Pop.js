import React from 'react'
import {
   
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

import { View, SafeAreaView, StyleSheet, Button, ImageBackground, Image } from "react-native"

import {
  Avatar,
  Title,
  Caption,
  Divider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import navigation from "react-native";
import { BottomPopup }  from './BottomPopup';
import MultiSelect from 'react-native-multiple-select';

const popuplist = [
    {
        id: 1,
        name:'Andaman and Nicobar (UT)'
    },
    {
        id: 2,
        name:'Andhra Pradesh'
    },
    {
        id: 3,
        name:'Arunachal Pradesh'
    },
    {
        id: 4,
        name:'Assam'
    },
    {
        id: 5,
        name:'Bihar'
    },
    {
        id: 6,
        name:'Chandigarh (UT)'
    },
    {
        id: 7,
        name:'Chhattisgarh'
    },
    {
        id: 8,
        name:'Dadra and Nagar Haveli (UT)'
    },
    {
        id: 9,
        name:'Daman and Diu (UT)'
    },
    {
        id: 10,
        name:'Delhi'
    },
    {
        id: 11,
        name:'Goa'
    },
    {
        id: 12,
        name:'Gujarat'
    },
    {
        id: 13,
        name:'Haryana'
    },
    {
        id: 14,
        name:'Himachal Pradesh'
    },
    {
        id: 15,
        name:'Jammu and Kashmir'
    },
    {
        id: 16,
        name:'Jharkhand'
    },
    {
        id: 17,
        name:'Karnataka'
    },
    {
        id: 18,
        name:'Kerala'
    },
    {
        id: 19,
        name:'Lakshadweep (UT)'
    },
    {
        id: 20,
        name:'Madhya Pradesh'
    },
    {
        id: 21,
        name:'Maharashtra'
    },
    {
        id: 22,
        name:'Manipur'
    },
    {
        id: 23,
        name:'Meghalaya'
    },
    {
        id: 24,
        name:'Mizoram'
    },
    {
        id: 25,
        name:'Nagaland'
    },
    {
        id: 26,
        name:'Orissa'
    },
    {
        id: 27,
        name:'Puducherry (UT)'
    },
    {
        id: 28,
        name:'Punjab'
    },
    {
        id: 29,
        name:'Rajasthan'
    },
    {
        id: 30,
        name:'Sikkim'
    },
    {
        id: 31,
        name:'Tamil Nadu'
    },
    {
        id: 32,
        name:'Tripura'
    },
    {
        id: 33,
        name:'Uttar Pradesh'
    },
    {
        id: 34,
        name:'Uttarakhand'
    },
    {
        id: 35,
        name:'West Bengal'
    },
    {
        id: 36,
        name:' '
    },
]
const Pop = () => {
    let popupRef = React.createRef()

    const onShowPopup = () => {
        popupRef.show()
    }
    const onClosePopup =() => {
        popupRef.close()
    }

    return (
        <>
            
            <SafeAreaView>
                <TouchableWithoutFeedback onPress={onShowPopup}>
                    <View style={{ marginLeft: 10, marginRight: 10, marginBottom: 30 }}>
                        <View style={styles.RectangleShape}>
                            <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 10 }}>
                                <Avatar.Image
                                    source={require('../Images/truckowner.png')}
                                    style={{ backgroundColor: `rgba(219, 228, 255, 1)` }}
                                    size={40}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.fixed, {
                                        marginTop: 0,
                                        marginBottom: 5,
                                        fontSize: 20,
                                        fontStyle: 'normal',
                                        fontFamily: ''
                                    }}>𝐌𝐲 𝐑𝐨𝐮𝐭𝐞𝐬 </Text>
                                    <Text>5</Text>

                                </View>
                                {/* onPress={onShowPopup} */}
                                <TouchableWithoutFeedback >
                                    <Icon name="nature" color="#777777" style={{ marginLeft: 155, marginTop: 10 }} size={30} />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <BottomPopup
                    title="Routes"
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    data={popuplist}
                />
                
            </SafeAreaView>
        </>
    )
}

export default Pop;


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    container2: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    },
    // .item {
    //   border: '1px dashed blue',
    //   height: '50px',
    //   box-sizing: 'border-box',
    //   max-width: '50%',
    // },
    background: {
      marginTop: 0,
      marginLeft: 5,
      width: 200 * 2,
      alignSelf: 'center',
      height: 380,
      backgroundColor: `rgba(219, 228, 255, 1)`,
      borderRadius: 10,
      borderColor: "transparent",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5
    },
    box: {
  
      width: 200 * 2,
      alignSelf: 'center',
      //justifyContent: 'center',
      height: 150,
      backgroundColor: `rgba(212, 212, 212, 1)`,
      borderColor: "transparent",
      // shadowColor: '#000',
      // shadowOffset: { width: 0, height: 1 },
      // shadowOpacity: 0.8,
      // shadowRadius: 2,
      // elevation: 5
    },
    userInfoSection: {
      marginVertical: 10,
      paddingHorizontal: 30,
      marginBottom: 0,
    },
  
    screenContainer: {
      // marginLeft: 250,
      marginTop: 20,
      alignSelf: 'flex-end',
      marginRight: 16,
      backgroundColor: `rgba(3, 58, 238, 1)`,
      borderRadius: 100,
      height: 25,
      width: 70,
      padding: 3
    },
  
    Butoon: {
      marginTop: 10,
      alignSelf: 'center',
      backgroundColor: `rgba(3, 58, 238, 1)`,
      borderRadius: 100,
      height: 30,
      width: 185,
      padding: 6,
      marginBottom: 10,
    },
  
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  
    fixed: {
      fontSize: 10
    },
  
    caption: {
      fontSize: 14,
      lineHeight: 1,
      fontWeight: '500',
      // alignContent: 'center',
      // justifyContent: 'center',
      // textAlign: "left"
    },
  
    row: {
      marginTop:6,
      flexDirection: 'row',
      marginBottom: -3,
    },
  
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
  
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    menuWrapper: {
      marginTop: 10,
    },
  
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
  
    RectangleShapeView: {
      marginLeft: -10,
      marginTop: -20,
      width: 185 * 1,
      height: 100,
      backgroundColor: `#fff`,
      borderRadius: 10,
      borderColor: "transparent",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5
    },
    RectangleShape: {
      
      marginTop: -4,
      width: 185 * 2,
      height: 100,
      backgroundColor: `#fff`,
      borderRadius: 10,
      borderColor: "transparent",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5
    },
  
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });
  