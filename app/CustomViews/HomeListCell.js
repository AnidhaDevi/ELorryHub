import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Alert,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Linking} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {HomeDetails} from './HomeDetails';
const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 5,
    marginBottom: 5,
    elevation: 2,
    height: APP_HEIGHT / 3,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeListCell = ({
  CategoryId,
  propertyAmount,
  ProjectName,
  Propertyimage,
  House,
  Parking,
  Address,
  modalvisible,
}) => (
  <View style={styles.container}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
        height: APP_HEIGHT / 3,
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            width: APP_WIDTH,
            height: 50,
            marginLeft: 10,
            flexDirection: 'row',
            padding: 10,
          }}>
          <Image
            style={{width: 30, height: 30}}
            source={require('./../Images/bell.png')}></Image>
          <Text
            style={{
              fontSize: 18,
              color: '#AAAAAA',
              fontWeight: 'bold',
              marginLeft: 10,
              textAlign: 'center',
              marginBottom: 5,
            }}>
            ABT Parcel Services
          </Text>
          <View
            style={{
              alignContent: 'flex-end',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginLeft: 20,
              marginRight: 30,
            }}>
            <View style={{marginLeft: 5}}>
              <Icon size={25} name="call" color="green" onPress={dial} />
            </View>
            <View style={{marginLeft: 5}}>
              <Icon size={25} name="message" color="green" onPress={message} />
            </View>
            <View style={{marginLeft: 5, marginRight: 30}}>
              <Icon1
                size={25}
                name="whatsapp"
                color="green"
                onPress={whatsapp}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            height: 0.5,
            backgroundColor: '#AAAAAA',
          }}
        />
        <View
          style={{
            width: APP_WIDTH,
            height: 50,
            flexDirection: 'row',
            padding: 10,
            marginRight: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              width: APP_WIDTH / 3,
              fontSize: 16,
              color: '#AAAAAA',
              fontWeight: 'bold',

              textAlign: 'left',
              alignSelf: 'flex-end',
              marginRight: 10,
            }}>
            FTL:50 Ton
          </Text>
          <Text
            style={{
              width: APP_WIDTH / 2.1,
              fontSize: 16,
              alignSelf: 'flex-end',
              color: '#AAAAAA',
              fontWeight: 'bold',

              textAlign: 'right',
              alignSelf: 'flex-end',
              marginLeft: 5,
              marginRight: 10,
            }}>
            INR : 1,00,000.00
          </Text>
        </View>
        <Text
          style={{
            width: APP_WIDTH / 2,
            fontSize: 16,

            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
            textAlign: 'left',

            marginBottom: 5,
          }}>
          Chennai to Madurai
        </Text>

        <View
          style={{
            width: APP_WIDTH,
            height: 50,
            flexDirection: 'row',
            padding: 10,
            marginTop: 30,
            position: 'relative',
          }}>
          <View style={{width: APP_WIDTH / 2, flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,

                color: '#AAAAAA',
                fontWeight: 'bold',
                textAlign: 'left',
                marginBottom: 5,
              }}>
              Load Target :
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#D79A8A',
                fontWeight: 'bold',
                textAlign: 'left',
                marginBottom: 5,
              }}>
              Today 10.00
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: APP_WIDTH / 4,
              backgroundColor: '#87A5A6',
              borderRadius: 20,
              marginLeft: 30,
              marginRight: 10,
            }}
            onPress={() => {
             
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                height: 50,
                padding: 2,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
     
    </View>
  </View>
);

const dial = () => {
  Linking.openURL(`tel:${9876543210}`);
};
const message = () => {
  Linking.openURL(`sms:${9876543210}`);
};

const whatsapp = () => {
  let url = 'whatsapp://send?text=' + '' + '&phone=91' + 9629012301;
  // let url = 'whatsapp://send?text=';
  Linking.openURL(url)
    .then(data => {
      console.log('WhatsApp Opened successfully ' + data); //<---Success
    })
    .catch(() => {
      alert('Make sure WhatsApp installed on your device'); //<---Error
    });
};

const details = () => {
  console.log('DATA A');
};

export default HomeListCell;
