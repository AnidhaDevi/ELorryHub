import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react"
import { BackHandler } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"
import { View, SafeAreaView, StyleSheet, Button, ImageBackground, Image } from "react-native"
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import {Avatar, Text, Title, Caption, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import navigation from 'react-native';
import Pop from './Pop';
import Edit_pop from './Edit_pop';
import Log_out from './Log_out';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  async componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );

    AsyncStorage.getItem('Token')
      .then(result => {
        let TOKEN = result;

        this.setState({deviceToken: TOKEN});
      })
      .done();
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View
            style={{marginHorizontal: 10, marginTop: 20, flexDirection: 'row'}}>
            <Icon
              name="keyboard-backspace"
              color="#000000"
              style={{marginLeft: 5, marginTop: 0}}
              size={35}
            />

            <Title
              style={
                (styles.title,
                {
                  marginBottom: 1,
                  marginHorizontal: 15,
                })
              }>
              {' '}
              Profile
            </Title>
          </View>
        </View>

        <ScrollView>
          <View style={styles.background}>
            <Edit_pop />

            <View
              style={{
                borderWidth: 12,
                borderRadius: 80,
                width: 160,
                height: 160,
                borderColor: 'grey',
                alignSelf: 'center',
              }}>
              <Image
                source={require('../Images/truckowner.png')}
                style={{
                  marginTop: -4,
                  borderWidth: 5,
                  height: 150,
                  width: 150,
                  borderRadius: 80,
                  borderColor: '#fff',
                  backgroundColor: '#fff',
                }}
              />
              {/* <Text style={{ color: '#777777',marginTop: -20, borderWidth: 2, borderColor: '#777777', backgroundColor: '#fff', alignSelf: 'center' }}>Hii</Text> */}
            </View>

            <View style={{marginVertical: 25, alignSelf: 'center'}}>
              <Title
                style={
                  (styles.title,
                  {
                    marginBottom: 1,
                  })
                }>
                Deepakraj
              </Title>
            </View>
            <View style={{marginVertical: -20, alignSelf: 'center'}}>
              <Caption style={(styles.title, {})}>Commission Agent</Caption>
            </View>

            {/* <View style={{ flexDirection: 'row', position: 'absolute' }}>
              <Avatar.Image
                source={require('../Images/truckowner.png')}
                size={90} style={{ marginTop: -40, marginVertical: 10, marginHorizontal: 10, borderWidth: 3, borderColor: '#fff', backgroundColor: '#fff', alignSelf: 'flex-start' }}
              />

              <View style={{ marginHorizontal: 10, marginTop: -1 }}>
                <Title style={styles.title, {
                  marginBottom: 1,
                }}>Deepakraj</Title>

              </View>
              <View style={{ marginHorizontal: -100, marginTop: 10 }}>
                <Caption style={styles.title, {
                  marginVertical: 18,
                }}>Commission Agent</Caption>
              </View>
            </View> */}

            {/* <View style={styles.userInfoSection}>

                            <View style={styles.row}>
                                <Icon name="map-marker-radius" color="#777777" size={20} />
                                <Text style={{ color: '#000000', marginLeft: 15 }}>Coimbatore, India</Text>
                            </View>

                            <View style={{ marginVertical: -5, marginHorizontal: 17 }}>
                                <Icon name="music-note-whole" color="#777777" size={20} style={{ alignSelf: 'flex-start' }} />
                                <Icon name="music-note-whole" color="#777777" size={15} style={{ alignSelf: 'flex-start', marginLeft: 2, marginTop: -4 }} />
                                <Icon name="music-note-whole" color="#777777" size={10} style={{ alignSelf: 'flex-start', marginLeft: 5 }} />
                            </View>

                            <View style={styles.row}>
                                <Icon name="phone" color="#777777" size={20} />
                                <Text style={{ color: '#000000', marginLeft: 15 }}>+91 9946555166</Text>
                            </View>

                            <View style={{ marginVertical: -5, marginHorizontal: 17 }}>
                                <Icon name="music-note-whole" color="#777777" size={20} style={{ alignSelf: 'flex-start' }} />
                                <Icon name="music-note-whole" color="#777777" size={15} style={{ alignSelf: 'flex-start', marginLeft: 2, marginTop: -4 }} />
                                <Icon name="music-note-whole" color="#777777" size={10} style={{ alignSelf: 'flex-start', marginLeft: 5 }} />
                            </View>


                            <View style={styles.row}>
                                <Icon name="email" color="#777777" size={20} />
                                <Text style={{ color: '#000000', marginLeft: 15 }}>deepakraj@elhaa.co.in</Text>
                            </View>

                            <View style={{ marginVertical: -5, marginHorizontal: 17 }}>
                                <Icon name="music-note-whole" color="#777777" size={20} style={{ alignSelf: 'flex-start' }} />
                                <Icon name="music-note-whole" color="#777777" size={15} style={{ alignSelf: 'flex-start', marginLeft: 2, marginTop: -4 }} />
                                <Icon name="music-note-whole" color="#777777" size={10} style={{ alignSelf: 'flex-start', marginLeft: 5 }} />
                            </View>


                            <View style={styles.row}>
                                <Icon name="office-building" color="#777777" size={20} />
                                <Text style={{ color: '#000000', marginLeft: 15 }}>Elhaa Technologies pvt. Ltd </Text>
                            </View>

                            <View style={{ marginVertical: -5, marginHorizontal: 17 }}>
                                <Icon name="music-note-whole" color="#777777" size={20} style={{ alignSelf: 'flex-start' }} />
                                <Icon name="music-note-whole" color="#777777" size={15} style={{ alignSelf: 'flex-start', marginLeft: 2, marginTop: -4 }} />
                                <Icon name="music-note-whole" color="#777777" size={10} style={{ alignSelf: 'flex-start', marginLeft: 5 }} />
                            </View>


                            <View style={styles.row}>
                                <Icon name="email" color="#777777" size={20} />
                                <Text style={{ color: '#000000', marginLeft: 15 }}>Elhaa@elhaa.co.in</Text>
                            </View>

                        </View> */}
          </View>

          {/* <View style={{ marginLeft: 5 }}>
                            <View style={styles.RectangleShapeView}>
                                <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 10 }}>
                                    <Avatar.Image
                                        source={require('../Images/user.png')}
                                        style={{ backgroundColor: `#fff` }}
                                        size={40}
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.fixed, {
                                            marginTop: 0,
                                            marginBottom: 5,
                                            fontSize: 20,
                                            fontStyle: 'normal',
                                            fontFamily: ''
                                        }}>𝐌𝐲 𝐥𝐨𝐚𝐝𝐬 </Text>
                                        <Text>10</Text>

                                    </View>
                                    <TouchableOpacity>
                                        <Icon name="arrow-right-circle-outline" color="#777777" style={{ marginLeft: 0, marginTop: 25 }} size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> */}

          <View style={{marginLeft: 10, marginRight: 10, marginBottom: 30}}>
            <View style={styles.RectangleShape}>
              <View
                style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
                <Avatar.Image
                  source={require('../Images/luckage.png')}
                  //  style={{ backgroundColor: `#FDE6D3` }}
                  style={{
                    backgroundColor: `#fff`,
                    height: 60,
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  size={50}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={
                      (styles.fixed,
                      {
                        marginTop: 0,
                        marginBottom: 5,
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontFamily: '',
                      })
                    }>
                    𝐌𝐲 𝐥𝐨𝐚𝐝𝐬
                  </Text>
                  <Text>10</Text>
                </View>
                {/* onPress={onShowPopup} */}
                <TouchableWithoutFeedback>
                  <Icon
                    name="chevron-right"
                    color="#777777"
                    style={{marginLeft: 155, marginTop: 10}}
                    size={30}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>

          <View style={{marginLeft: 10, marginRight: 10, marginBottom: 30}}>
            <View style={styles.RectangleShape}>
              <View
                style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
                <Avatar.Image
                  source={require('../Images/pro_truck.jpg')}
                  // style={{ backgroundColor: `rgba(219, 228, 255, 1)` }}
                  style={{
                    backgroundColor: `#FDE6D3`,
                    height: 60,
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  size={70}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={
                      (styles.fixed,
                      {
                        marginTop: 0,
                        marginBottom: 5,
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontFamily: '',
                      })
                    }>
                    𝐌𝐲 𝐓𝐫𝐮𝐜𝐤𝐬
                  </Text>
                  <Text>4</Text>
                </View>
                {/* onPress={onShowPopup} */}
                <TouchableWithoutFeedback>
                  <Icon
                    name="chevron-right"
                    color="#777777"
                    style={{marginLeft: 140, marginTop: 10}}
                    size={30}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>

          <View style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}>
            <View style={styles.RectangleShape}>
              <View
                style={{flexDirection: 'row', marginTop: 25, marginLeft: 10}}>
                <Avatar.Image
                  source={require('../Images/prof.png')}
                  // style={{ backgroundColor: `rgba(219, 228, 255, 1)` }}
                  style={{
                    backgroundColor: `#E5FCF9`,
                    height: 60,
                    width: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  size={50}
                />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={
                      (styles.fixed,
                      {
                        marginTop: 10,
                        marginBottom: 5,
                        fontSize: 20,
                        fontStyle: 'normal',
                        fontFamily: '',
                      })
                    }>
                    𝐂𝐨𝐦𝐩𝐚𝐧𝐲 𝐩𝐫𝐨𝐟𝐢𝐥𝐞
                  </Text>
                </View>
                {/* onPress={onShowPopup} */}
                <TouchableWithoutFeedback>
                  <Icon
                    name="chevron-right"
                    color="#777777"
                    style={{marginLeft: 87, marginTop: 10}}
                    size={30}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>

          {/* <View style={{ marginLeft: 15 }}>
                            <View style={styles.RectangleShapeView}>
                                <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 10 }}>
                                    <Avatar.Image
                                        source={require('../Images/truckowner.png')}
                                        style={{ backgroundColor: `#fff` }}
                                        size={40}
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.fixed, {
                                            marginTop: 0,
                                            marginBottom: 5,
                                            fontSize: 20,
                                            fontStyle: 'normal',
                                            fontFamily: ''
                                        }}>𝐌𝐲 𝐓𝐫𝐮𝐜𝐤𝐬 </Text>
                                        <Text>5</Text>

                                    </View>
                                    <TouchableOpacity>
                                        <Icon name="arrow-right-circle-outline" color="#777777" style={{ marginLeft: 0, marginTop: 25 }} size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> */}

          <Divider
            style={{
              marginHorizontal: 0,
              marginVertical: 10,
              height: 3,
              width: '100%',
              alignSelf: 'center',
              color: '#000000',
            }}
          />

          {/* <Pop /> */}

          <Divider
            style={{
              color: `#000000`,
              marginHorizontal: 20,
              marginVertical: 10,
              height: 3,
            }}
          />

          <Log_out />
          {/* logout */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ProfileScreen;

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
    height: 330,
    backgroundColor: `rgba(219, 228, 255, 1)`,
    borderRadius: 10,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    marginTop: 0,
    marginLeft: 5,
    width: 200 * 2,
    alignSelf: 'center',
    height: 60,
    borderBottomWidth: 0,
    backgroundColor: `rgba(219, 228, 255, 1)`,
    borderRadius: 10,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 0,
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
  screenChange: {
    // marginLeft: 250,
    marginTop: -70,
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
    marginTop: -20,
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

