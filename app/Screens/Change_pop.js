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
import { ChangeEditPopup } from './ChangeEditPopup';


const popuplist = [
    {
        id: 1,
        name: 'Gallery'
    },
    {
        id: 2,
        name: 'Camera'
    },
    {
        id: 3,
        name: 'LinkedIn'
    },
]
const Change_pop = () => {
    let popupRef = React.createRef()

    const onShowPopup = () => {
        popupRef.show()
    }
    const onClosePopup = () => {
        popupRef.close()
    }

    return (
        <>

            <SafeAreaView>
                <TouchableWithoutFeedback onPress={onShowPopup}>

                    <View style={styles.screenContainer}>
                        <View style={{ flexDirection: 'row', marginRight: 8, alignSelf: 'center', marginLeft: 0 }}>
                            <Icon name="pencil" color="#fff" size={18} />
                            <Text style={{ color: `#fff` }}>Change</Text>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
                
                    <ChangeEditPopup
                        title="Select"
                        ref={(target) => popupRef = target}
                        onTouchOutside={onClosePopup}
                        data={popuplist}
                    />
               
            </SafeAreaView>
        </>
    )
}

export default Change_pop;


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
        marginTop: 6,
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
