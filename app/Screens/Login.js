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



const APP_WIDTH = Dimensions.get("window").width;
const APP_HEIGHT = Dimensions.get("window").height;



export default class LoginScreen extends React.Component {

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
    BackHandler.exitApp();
    return true;
  }
  loginUser() {
    if (this.state.phone.trim().length <= 0) {
      Alert.alert("Please enter the Phone Number")
    }
    else if (this.state.phone.trim().length > 10 || this.state.phone.trim().length < 10) {
      Alert.alert("Invalid Phone Number")
    }


    else {

      var uniqueId = DeviceInfo.getUniqueId();

      console.log("uniqueId", this.state.devicetoken);

      let type;

      if (Platform.OS === 'android') {

        type = 1;
      }
      else if (Platform.OS === 'ios') {
        type = 2;

      }

      this.setState({ loading: true });
      const networkServiceObj = new NetworkService()
      let input = {
        "phone_number": this.state.phone,

        // "Password": this.state.password, "Deviceid": uniqueId,
        // "DeviceToken": this.state.deviceToken, "Type": type
      }


      networkServiceObj.loginService(input).then(res => {
        if (res) {
          console.log(res)

          let response = res

          console.log(response)



          if (response.status == 'Success') {

            // AsyncStorage.setItem("user_id", response.user_id);

            // AsyncStorage.setItem("Token", this.state.deviceToken);

            // AsyncStorage.setItem("user_name", response.user_name);

            console.log("otp", response.data.otp);
            console.log("input", this.state.phone);

            this.props.navigation.navigate("OTPScreen",
              {
                otp: response.data.otp,
                phoneno: this.state.phone,
              });


          } else {

            Alert.alert(response.message)
          }
        }
        this.setState({ loading: false });

      })
    }
  }


  render() {
    const viewStyles =
      { marginTop: 40, marginLeft: 25, width: APP_WIDTH - 50, height: APP_HEIGHT / 2.3, alignItems: 'center', borderRadius: 10 }
      ;
    const textStyles = {
      height: 50, width: APP_WIDTH - 40, color: 'black', backgroundColor: '#5f8ede', borderRadius: 10, paddingLeft: 10, marginTop: 20, paddingTop: 10, paddingBottom: 15, color: "white"
    };


    return (

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View >
            <ImageBackground style={{ width: APP_WIDTH, height: 100, flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }} source={require('../Images/headerlogo.png')} >
              <Image
                style={{ width: 20, height: 20, marginTop: 15, marginRight: 5 }}
                source={require('../Images/star.png')}
              />
              <Text style={{ textAlign: 'center', marginTop: 15, fontSize: 16, marginBottom: 10, color: '#515151', fontWeight: '600' }}>Trusted by 1.5+ Lakh Transporters</Text>

            </ImageBackground>





            <View >
              <Image
                style={{ width: 100, height: 100, marginTop: '-10%', alignSelf: 'center' }}
                source={require('../Images/circle.png')}
              />
            </View>
            <Image
              style={{ width: 100, height: 100, marginTop: '-25%', alignSelf: 'center' }}
              source={require('../Images/splash_logo.png')}
            />
          </View>
          <Text style={{ width: APP_WIDTH, textAlign: 'center', marginTop: 10, fontSize: 20, marginBottom: 10, color: '#515151', fontWeight: '600' }}>Hello,Enter mobile number to get started</Text>

          <View style={styles.sectionStyle}>
            <Text style={{ marginLeft: 15 }}>+91</Text>
            <TextInput
              style={{ flex: 1, marginLeft: 15 }}
              underlineColorAndroid="transparent"
              onChangeText={(phone) => this.setState({ phone })}
              returnKeyType='done'
              value={this.state.phone}
              placeholder="Phone Number"
              placeholderTextColor="grey"
              color="black"
              multiline={Platform.OS == 'android' ? true : false}
              maxLength={10}
              autoCapitalize="none"
              multiline={false}
              keyboardType='numeric'
            />


          </View>
          <View style={styles.bottomView}>
            <Text style={{ fontSize: 12, color: 'black', margin: 10 }}>By signing up, you accept our Terms of use &amp; Privacy Policy</Text>
            <TouchableOpacity style={{
              width: '80%', borderRadius: 15, backgroundColor: '#0066FF', marginRight: 40, marginLeft: 40,
              marginBottom: 10,
            }} onPress={() => this.loginUser()}>
              <Text style={{ color: '#FFFFFF', fontSize: 20, height: 50, padding: 10, textAlign: 'center', fontWeight: "bold" }}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },

  container1: {
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: APP_WIDTH - 40,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderWidth: 2,
    margin: 10,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
  },
  detailRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  sectionStyle1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: APP_WIDTH - 40,
    borderRadius: 25,
    margin: 10
  },
  imageStyle: {
    padding: 10,
    margin: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  imageLoginStyle: {
    height: 60,
    marginLeft: 30,
    marginRight: 10,
    marginTop: 100,
    width: APP_WIDTH / 1.2,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center'
  },
});