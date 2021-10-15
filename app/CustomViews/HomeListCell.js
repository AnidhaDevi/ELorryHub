import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Alert,
  Button,TouchableOpacity
} from 'react-native';

const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    elevation: 2,
    // width:APP_WIDTH-30,
    height: APP_HEIGHT / 3,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_text: {
    flex: 1,
    flexDirection: 'row',
  },
  inner_container: {
    flexDirection: 'column',
  },
  inv_totalrooms: {
    fontSize: 16,
    color: '#3BB9FF',
    fontWeight: 'bold',
  },
  inv_amount: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    margin: 5,
    backgroundColor: '#e7545b',
    borderRadius: 30,
    padding: 5,
    textAlign: 'center',
    width: APP_WIDTH - 300,
  },
  inv_address: {
    fontSize: 16,
    color: '#fefefe',
    fontWeight: 'bold',
    padding: 5,
    marginRight: 10,
    textAlign: 'right',
  },
  txt_property: {
    fontSize: 18,
    color: '#fefefe',
    fontWeight: 'bold',
    padding: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
  },
  locationIcon: {
    margin: 30,
    height: 20,
    width: 15,
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
        backgroundColor: 'white'
      }}>
      <View style={{ flexDirection: 'column' }}>
        <View style={{
          width: APP_WIDTH, height: 50,
          marginLeft: 20,
          flexDirection: 'row', padding: 10,
        }}>
          <Image style={{ width: 30, height: 30, }} source={require('./../Images/bell.png')}></Image>
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
        </View>
        <View style={{ marginLeft: 10, marginRight: 10, height: 0.5, backgroundColor: '#AAAAAA' }} />
        <View style={{
          width: APP_WIDTH, height: 50,
          flexDirection: 'row', padding: 10,
          marginRight: 10,
        }}>
          <Text
            style={{
              fontSize: 16,
              width: APP_WIDTH / 2,
              color: '#AAAAAA',
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: 5,
            }}>
            FTL:50 Ton
          </Text>
          <Text
            style={{
              width: APP_WIDTH / 2,
              fontSize: 16,
              alignSelf: 'flex-end',
              color: '#AAAAAA',
              fontWeight: 'bold',

              textAlign: 'center',
              alignSelf: 'flex-end',
              marginBottom: 5,
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
        <View style={{

          width: APP_WIDTH, height: 50,
          flexDirection: 'row', padding: 10,
          marginTop: 30, position: 'relative'
        }}>
          <Text
            style={{
              fontSize: 16,
              width: APP_WIDTH / 4,
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
          <TouchableOpacity style={{
          
            width: APP_WIDTH / 3,
            backgroundColor:'#87A5A6',
            borderRadius:20,marginLeft:25
          }} onPress={() => this.continue()}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, height: 50,padding:5,  textAlign: 'center', fontWeight: "bold" }}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default HomeListCell;
