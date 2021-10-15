import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView, Modal, Platform
} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import { StackActions, NavigationActions } from 'react-navigation';
import NetworkService from "../Services/NetworkService"
import ProgressSpin from '../Components/ProgressSpin';
import { BackHandler } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DeviceInfo from 'react-native-device-info';
import { ScrollView } from 'react-native-gesture-handler';



const APP_WIDTH = Dimensions.get("window").width;
const APP_HEIGHT = Dimensions.get("window").height;


var type;

export default class MyLoadsscreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      loading: false,
      strUserId: '',
      strUserName: '',
      deviceToken: '',
      registerToken: '',
    }




    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }


  async componentDidMount() {

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

    AsyncStorage.getItem("Token").then((result) => {

      let TOKEN = result;

      this.setState({ deviceToken: TOKEN })



    }).done();

  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }


  render() {
    return (

      <Text>My Loads</Text>

    )
  }
}