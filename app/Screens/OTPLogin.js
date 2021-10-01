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
  SafeAreaView, Modal, Platform, Clipboard
} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import { StackActions, NavigationActions } from 'react-navigation';
import NetworkService from "../Services/NetworkService"
import ProgressSpin from '../Components/ProgressSpin';
import { BackHandler } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';



const APP_WIDTH = Dimensions.get("window").width;
const APP_HEIGHT = Dimensions.get("window").height;


var otp, phoneno;

export default class OTPScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      otp_val: '',
    }




    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }


  async componentDidMount() {

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  continue() {

    console.log("phoneno==>", phoneno);
    console.log("token==>", otp);


    //this.props.navigation.navigate("FirstScreen");

    this.setState({ loading: true });
    const networkServiceObj = new NetworkService()
    let input = {
      "phone_number": phoneno,
      "token": otp
    }
    networkServiceObj.otpService(input).then(res => {
      if (res) {
        console.log(res)

        let response = res

        console.log(response)

        AsyncStorage.setItem("isloggedin", "No");

        console.log("res==========>", response.status);

        if (response.status == 'success') {

          console.log("res==========>", response.data.user);

          if (response.data.user == null) {

            this.props.navigation.navigate("FirstScreen");

          }
          else {

            // AsyncStorage.setItem("isloggedin", "Yes");


            // AsyncStorage.setItem("user_id", response.data.user.id);

            // AsyncStorage.setItem("Token", this.state.data.token);

            // AsyncStorage.setItem("user_name", response.data.user.name);

            // AsyncStorage.setItem("isloggedin", "Yes");

            this.props.navigation.navigate("Home");

          }

        } else {
          AsyncStorage.setItem("isloggedin", "No");
          Alert.alert(response.message)
        }
      }
      this.setState({ loading: false });
    })

  }

  ResendApi(phone_number) {

    this.setState({ loading: true });
    const networkServiceObj = new NetworkService()
    let input = {
      "phone_number": phone_number,
    }


    networkServiceObj.loginService(input).then(res => {
      if (res) {
        console.log(res)

        let response = res

        console.log(response)



        if (response.status == 'Success') {


          console.log("otp", response.data.otp);
          console.log("input", phone_number);

          this.props.navigation.navigate("OTPScreen",
            {
              otp: response.data.otp,
              phoneno: phone_number,
            });


        } else {

          Alert.alert(response.message)
        }
      }
      this.setState({ loading: false });

    })

  }


  render() {
    const viewStyles =
      { marginTop: 40, marginLeft: 25, width: APP_WIDTH - 50, height: APP_HEIGHT / 2.3, alignItems: 'center', borderRadius: 10 }
      ;
    const textStyles = {
      height: 50, width: APP_WIDTH - 40, color: 'black', backgroundColor: '#5f8ede', borderRadius: 10, paddingLeft: 10, marginTop: 20, paddingTop: 10, paddingBottom: 15, color: "white"
    };

    const { navigation } = this.props;


    otp = navigation.getParam('otp', '');
    phoneno = navigation.getParam('phoneno', '');

    console.log("phoneno", phoneno);

    return (

      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

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

          <Text style={{ width: APP_WIDTH, textAlign: 'center', marginTop: 10, fontSize: 20, marginBottom: 10, color: '#515151', fontWeight: '600' }}>Please Enter OTP Verification</Text>

          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Text style={{ flex: 1.5, width: APP_WIDTH / 10, textAlign: 'center', fontSize: 15, color: '#6E6E6E', fontWeight: '600' }}>Code was sent to   +91 {phoneno}</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={{
                flex: 3, fontSize: 14, color: '#F95A2C',
                textDecorationLine: 'underline',

              }}>edit</Text>
            </TouchableOpacity>
          </View>
          {/* <Text style={{ width: APP_WIDTH, textAlign: 'center', fontSize: 15, color: '#6E6E6E', fontWeight: '600', marginRight: 40 }}>This code expire in </Text> */}

          <OTPInputView
            pinCount={6}
            style={{
              width: '70%',
              height: 50,
              color: 'black',
              alignSelf: 'center',
              marginTop: 10
            }}
            editable={false}
            code={otp}
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={value => {
              this.setState({ "otp_val": value })

            }}

          />
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <Text style={{ flex: 1, width: APP_WIDTH, textAlign: 'center', marginRight: 70, fontSize: 15, color: '#6E6E6E', fontWeight: '600' }}>Didn’t receive an OTP?</Text>
            <TouchableOpacity onPress={() => this.ResendApi(phoneno)}>
              <Text style={{
                flex: 3, fontSize: 14, color: '#F95A2C',
                textDecorationLine: 'underline',

              }}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={{
            width: '80%', borderRadius: 15, backgroundColor: '#0066FF', marginRight: 40, marginLeft: 40,
            marginBottom: 10,
          }} onPress={() => this.continue()}>
            <Text style={{ color: '#FFFFFF', fontSize: 20, height: 50, padding: 10, textAlign: 'center', fontWeight: "bold" }}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width: '80%', borderRadius: 15, borderWidth: 2, borderColor: '#0066FF', marginRight: 40, marginLeft: 40,
            marginBottom: 10,
          }} onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{ color: '#0066FF', fontSize: 20, height: 50, padding: 10, textAlign: 'center', }}>Skip</Text>
          </TouchableOpacity>

        </View>
        {this.state.loading &&
          <ProgressSpin />
        }
      </SafeAreaView >


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
  textInput: {
    marginTop: 20,
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  otpView: {
    width: '80%',
    height: 200,
    color: 'black',
    justifyContent: 'center',
    alignContent: 'center',

  },
  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderBottomWidth: 2,
    margin: 3,
    color: 'black',

  },
});