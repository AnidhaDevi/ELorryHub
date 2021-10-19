/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
  ToastAndroid,
  ImageBackground,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import ProgressSpin from '../Components/ProgressSpin';
import {BackHandler} from 'react-native';
import Header from '../CustomViews/Header';

import HomeListCell from '../CustomViews/HomeListCell';
import {FlatList} from 'react-native-gesture-handler';
import NetworkService from '../Services/NetworkService';
import {SearchBar} from 'react-native-elements';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Linking} from 'react-native';
const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

export default class Homescreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      text: '',
      Alert_Visibility: false,
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

  // loadHomeList() {
  //     this.setState({ loading: true });
  //     const networkServiceObj = new NetworkService();
  //     let input = { user_id: user_id };
  //     networkServiceObj.loadMyPropertyList(input).then(res => {
  //         if (res) {
  //             console.log(res);
  //             let response = res;
  //             console.log('@@ Status : ' + response.status);
  //             console.log('@@ Message : ' + response.message);
  //             if (response.status === 'success') {
  //                 let dList = response.PropertyList;
  //                 this.setState({ deliveryList: dList });
  //             }
  //         }
  //         this.setState({ loading: false });
  //     });
  // }
  Show_Custom_Alert(visible) {
    this.setState({Alert_Visibility: visible});
  }
  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
      // onPress={() => this.rowSelected(item)}
      >
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
                    <Icon2
                      size={25}
                      name="sms"
                      color="#4DAEE7"
                      onPress={message}
                    />
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
                    this.Show_Custom_Alert(true);
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
          <Modal
            style={{justifyContent: 'center', alignContent: 'center'}}
            transparent={true}
            visible={this.state.Alert_Visibility}
            onRequestClose={() => {
              this.setState({
                Alert_Visibility: !this.state.Alert_Visibility,
              });
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.5,
              }}>
              <View
                style={{
                  resizeMode: 'cover',
                  borderRadius: 15,
                  overflow: 'hidden',
                  height: APP_HEIGHT / 2,
                  backgroundColor: '#FEFEFE',
                  margin: 15,
                  borderColor: 'black',
                  borderWidth: 1,
                }}>
                <View
                  style={{
                    marginLeft: 10,
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      alignItems: 'center',
                      width: APP_WIDTH / 2,
                      flexDirection: 'row',
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
                      }}>
                      ABT Parcel Services
                    </Text>
                  </View>
                  <View
                    style={{
                      width: APP_WIDTH / 3,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{marginLeft: 5}}>
                      <Icon
                        size={25}
                        name="call"
                        color="green"
                        onPress={dial}
                      />
                    </View>
                    <View style={{marginLeft: 5}}>
                      <Icon2
                        size={25}
                        name="sms"
                        color="#4DAEE7"
                        onPress={message}
                      />
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
                    height: 1,
                    backgroundColor: '#000000',
                  }}
                />
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      width: APP_WIDTH / 3,
                      fontSize: 16,
                      color: '#AAAAAA',
                      fontWeight: 'bold',
                      textAlign: 'left',
                      marginLeft: 10,
                      marginRight: 10,
                    }}>
                    FTL:50 Ton
                  </Text>
                  <Text
                    style={{
                      width: APP_WIDTH / 2,
                      fontSize: 16,
                      color: '#AAAAAA',
                      fontWeight: 'bold',
                      textAlign: 'right',
                      marginLeft: 5,
                      marginRight: 15,
                    }}>
                    INR : 1,00,000.00
                  </Text>
                </View>
                <View style={{marginTop: 5, flexDirection: 'column'}}>
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
                  <Text
                    style={{
                      width: APP_WIDTH / 2,
                      fontSize: 16,

                      color: '#939393',
                      fontWeight: 'bold',
                      marginLeft: 10,
                      textAlign: 'left',

                      marginBottom: 5,
                    }}>
                    Vehicle Type: Open Body Truck
                  </Text>
                  <Text
                    style={{
                      width: APP_WIDTH / 2,
                      fontSize: 16,

                      color: '#989898',
                      fontWeight: 'bold',
                      marginLeft: 10,
                      textAlign: 'left',

                      marginBottom: 5,
                    }}>
                    Vehicle Length : 22 Feet
                  </Text>
                  <Text
                    style={{
                      width: APP_WIDTH / 2,
                      fontSize: 16,

                      color: '#989898',
                      fontWeight: 'bold',
                      marginLeft: 10,
                      textAlign: 'left',

                      marginBottom: 5,
                    }}>
                    Trip Type: Return
                  </Text>
                  <Text
                    style={{
                      width: APP_WIDTH / 2,
                      fontSize: 16,

                      color: '#989898',
                      fontWeight: 'bold',
                      marginLeft: 10,
                      textAlign: 'left',

                      marginBottom: 5,
                    }}>
                    Material Type: Chemical
                  </Text>
                  <Text
                    style={{
                      width: APP_WIDTH / 2,
                      fontSize: 16,

                      color: '#989898',
                      fontWeight: 'bold',
                      marginLeft: 10,
                      textAlign: 'left',

                      marginBottom: 5,
                    }}>
                    Message: Reference site above Lorem.
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableOpacity>
    );
  };

  // rowSelected(item) {
  //   console.log('Item', item);
  //   this.props.navigation.push('PropertyDetailsNew', {
  //     PropertyId: item.PropertyId,
  //     isPropertyEditable: false,
  //   });
  // }
  searchData(text) {
    console.log('text======>', text);
    // const newData = this.deliveryList.filter(item => {
    //   const itemData = item.name.toUpperCase();
    //   const textData = text.toUpperCase();
    //   return itemData.indexOf(textData) > -1;
    // });

    // this.setState({
    //   data: newData,
    //   text: text,
    // });
  }
  render() {
    const {navigation} = this.props;
    const dropdownStyles = {
      width: APP_WIDTH / 1.7,
      height: 48,
      backgroundColor: 'white',
      borderRadius: 5,
      marginRight: 1,
    };

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
          {/* <Header
            strTitle="Home"
            navigate={this.props.navigation}
            back={true}
          /> */}
          <View style={styles.ViewStyle1}>
            <TouchableOpacity style={styles.style2}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  textAlign: 'center',
                  padding: 5,
                  fontWeight: 'bold',
                }}>
                LOAD
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.style2}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  textAlign: 'center',
                  padding: 5,
                  fontWeight: 'bold',
                }}>
                TRUCK
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ViewStyle2}>
            <View style={{marginLeft: 5}}>
              <Icon name="search" color="#AAAAAA" />
            </View>
            <TextInput
              onChangeText={text => this.searchData(text)}
              value={this.state.text}
              placeholder="Search"
              style={styles.searchBar}
            />
          </View>
          <View
            style={{backgroundColor: '#F6F6F6', height: APP_HEIGHT, flex: 1}}>
            <FlatList
              scrollEnabled={false}
              style={{marginBottom: 20}}
              data={[{key: 'Android'}, {key: 'iOS'}, {key: 'Java'}]}
              renderItem={this._renderItem}
            />
          </View>
          {this.state.loading && <ProgressSpin />}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: '#000000',
    marginTop: 10,
  },

  ViewStyle1: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F7F6F9',
    height: '5%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    fontSize: 16,
    margin: 10,
    width: '75%',
    height: 50,
  },

  ViewStyle2: {
    flexDirection: 'row',
    marginLeft: 28,
    marginRight: 28,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F7F6F9',
    height: '5%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style2: {
    flex: 1,
    width: APP_WIDTH / 4,
    height: APP_HEIGHT / 20,
    borderRadius: 20,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
    position: 'absolute',
  },
});
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
