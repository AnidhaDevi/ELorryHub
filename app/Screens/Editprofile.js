import React, { Component } from "react"
import { View, SafeAreaView, StyleSheet, Button, ImageBackground } from "react-native"
import { ScrollView, TextInput, TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler";
import {
  Avatar,
  Text,
  Title,
  Caption,
  Divider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Change_pop from "./Change_pop";

import SignUp from "./SignUp";


class Editprofile extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.Header}>
          <View style={{ flexDirection: 'row' }}>
            <Title style={{ marginLeft: 15, marginTop: 15, color: `rgba(54, 105, 201, 1)` }}>Edit Profile</Title>

            <Icon name="close" color="#000000" size={20}
              style={{ marginTop: 18, marginLeft: 240 }}
            />

          </View>
        </View>

        <ScrollView>
          <View style={styles.background}>
            <ImageBackground
              source={require('../Images/truckowner.png')}
              style={{ height: '100%', width: '100%', position: 'absolute', resizeMode: "contain" }}
            />

            {/* <TouchableOpacity>
              <View style={{ flexDirection: "row", alignSelf: 'center', marginTop: 6, opacity: 0.8, marginLeft: 300, backgroundColor: `rgba(3, 58, 238, 1)`, borderRadius: 100, height: 30, width: 85, padding: 4 }}>
                <Icon name="pencil" color="#777777" size={20}
                  style={{ color: '#fff' }}
                />
                <Text style={{ color: `#fff` }}>Change</Text>

              </View>
            </TouchableOpacity> */}

            <Change_pop/>

            <Avatar.Image
              source={require('../Images/shipper.png')}
              size={120} style={{ position: 'absolute', marginTop: 90, marginLeft: 125, borderWidth: 3, borderColor: '#fff', backgroundColor: '#fff' }}
            />
            <TouchableOpacity>
              <View style={styles.small}>
                <Icon name="pencil" size={20}
                  style={{ color: '#fff' }}
                />
              </View>
            </TouchableOpacity>
          </View>


          <View>
            <Title style={{ marginTop: 60, marginLeft: 20, color: '#040404' }}>Profile Information</Title>
            <SignUp />
          </View>

          <View>
            <Title style={{ marginTop: 30, marginLeft: 20, color: '#040404' }}>Website Information</Title>
          </View>

          <View style={{ marginLeft: 20 }}>
            <View style={styles.RectangleShapeView}>
              <View style={{ flexDirection: 'row', marginTop: 6, marginLeft: 6 }}>
                <ImageBackground
                  source={require('../Images/truckowner.png')}
                  style={{ height: 110, width: 90, position: 'absolute', resizeMode: "contain" }}
                />
                <View style={{ marginLeft: 20 }}>
                  <Title style={styles.fixed, {
                    marginTop: 5,
                    marginLeft: 80,
                    marginBottom: 1,
                    fontSize: 15,
                  }}>My Logo</Title>
                  <Caption style={{ marginLeft: 80 }}>This logo will appear in your website</Caption>

                  <TouchableOpacity>
                    <View style={{ flexDirection: "row", alignSelf: 'center', marginTop: 15, opacity: 0.8, marginLeft: 230, backgroundColor: `rgba(3, 58, 238, 1)`, borderRadius: 100, height: 30, width: 85, padding: 4 }}>
                      <Icon name="pencil" color="#777777" size={20}
                        style={{ color: '#fff' }}
                      />
                      <Text style={{ color: `#fff` }}>Change</Text>
                    </View>
                  </TouchableOpacity>

                </View>

              </View>
            </View>
          </View>

          <View style={styles.input}>
            <TextInput style={{ marginTop: -15 }}
              placeholder='About my company'
              autoCapitalize="none"
              placeholderTextColor='#020000'
              onChangeText={val => this.onChangeText('about', val)}
            />
            <Text style={{ marginLeft: 290, marginTop: 20 }}>
              0/150
            </Text>
          </View>

          {/* <View style={styles.Footer}> */}
         
          {/* <TouchableHighlight onPress={() => { }}>
              <View>
                <Icon name="bookmark-plus-outline" 
                
                style={{ 
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                 
                  borderRadius: 30,
                  // width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,}}>
                  <Text style={{fontSize: 20}}>Save Changes</Text>
                </Icon>
              </View>
            </TouchableHighlight> */}



          {/* </View> */}

        </ScrollView>
        <TouchableOpacity>
            <View style={{
              flexDirection: "row",
              marginHorizontal: 8,
              // alignSelf: 'center',
              marginTop: 15,
              opacity: 0.8,
              marginBottom: 20,
              backgroundColor: `rgba(3, 58, 238, 1)`,
              borderRadius: 100,
              height: 50,
              width: '95%', textAlign: 'center', alignContent: 'center', justifyContent: 'center',
              padding: 4
            }}>
              <Icon name="bookmark-plus-outline" color="#777777" size={20}
                style={{ color: '#fff', marginVertical: 12, fontWeight: 'bold', fontSize: 20 }}
              />
              <Text style={{ color: `#fff`, marginVertical: 8, fontSize: 20, fontWeight: 'bold' }}>Save Changes</Text>

            </View>
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
export default Editprofile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  Header: {

    width: 195 * 2,
    height: 55,
    backgroundColor: `#F9F8F5`,
    borderRadius: 10,
    borderColor: "transparent",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5

  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  Footer: {

    width: 195 * 2,
    height: 55,
    backgroundColor: `#F9F8F5`,
    borderRadius: 10,
    borderColor: "transparent",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5

  },

  input: {
    marginTop: 4,
    flex: 1,
    marginLeft: 20,
    width: 350,
    height: 85,
    backgroundColor: '#E5E5E5',
    margin: 10,
    padding: 8,
    color: '#040404',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  small: {
    top: 0,
    marginTop: 140,
    marginLeft: 210,
    backgroundColor: `rgba(3, 58, 238, 1)`,
    borderRadius: 100,
    height: 36,
    width: 36,
    padding: 8, opacity: 0.7
  },
  background: {

    width: 200 * 2,
    height: 150,
    backgroundColor: `#FEEDD9`,
    borderRadius: 10,

    borderColor: "transparent",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

    elevation: 5
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
    marginRight: 200,
  },
  screenContainer: {
    flex: 1,
    marginLeft: 180,
    height: 60,
    backgroundColor: `#7390AD`,
    borderRadius: 100,
    width: 70,
    padding: 8
  },
  Butoon: {
    marginLeft: 40,
    backgroundColor: `#7390AD`,
    borderRadius: 100,
    height: 40,
    width: 200,
    padding: 10,
    marginBottom: 10
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
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
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
    marginTop: 10,
    width: 175 * 2,
    height: 120,
    backgroundColor: `#EDECEC`,
    borderRadius: 10,
    marginBottom: 10,
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

