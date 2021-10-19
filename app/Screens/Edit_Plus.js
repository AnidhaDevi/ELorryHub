import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Avatar, Title, Caption, Divider, Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import navigation from 'react-native';
//import { Edit_BottomPopup } from './Edit_BottomPopup';
import {Plus_BottomPopup} from '../Screens/Plus_bottomPopup';

const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

const popuplist = [
  {
    id: 1,
    name: 'Gallery',
  },
  {
    id: 2,
    name: 'Camera',
  },
];
const Edit_Plus = () => {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };
  const onClosePopup = () => {
    popupRef.close();
  };

  return (
    <>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={onShowPopup}>
          {/* Place the floating button here */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onShowPopup}
            style={styles.touchableOpacityStyle}>
            <View
              style={{
                width: '20%',
                height: '80%',
                backgroundColor: '#4DAEE7',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 25,
              }}>
              <Image
                source={require('../Images/img_plus.png')}
                style={styles.floatingButtonStyle}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginLeft: 10,
                }}>
                Post
              </Text>
            </View>
          </TouchableOpacity>
        </TouchableWithoutFeedback>

        <Plus_BottomPopup
          title="Select"
          ref={target => (popupRef = target)}
          onTouchOutside={onClosePopup}
          data={popuplist}
        />
      </SafeAreaView>
    </>
  );
};

export default Edit_Plus;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  item: {
    width: '50%', // is 50% of container width
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: APP_WIDTH,
    height: 50,
    alignItems: 'center',
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',

    width: 25,
    height: 25,
    tintColor: '#0B39F3',
    alignSelf: 'center',
    //backgroundColor:'black'
  },
  background: {
    marginTop: 0,
    marginLeft: 5,
    width: 200 * 2,
    alignSelf: 'center',
    height: 380,
    backgroundColor: `rgba(219, 228, 255, 1)`,
    borderRadius: 10,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  box: {
    width: 200 * 2,
    alignSelf: 'center',
    //justifyContent: 'center',
    height: 150,
    backgroundColor: `rgba(212, 212, 212, 1)`,
    borderColor: 'transparent',
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
    padding: 3,
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
    fontSize: 10,
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
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  RectangleShape: {
    marginTop: -4,
    width: 185 * 2,
    height: 100,
    backgroundColor: `#fff`,
    borderRadius: 10,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
