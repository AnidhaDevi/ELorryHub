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

export default class Registerscreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      companyname:'',
      companyemail:'',
      personname:'',
      city:'',
      address:'',
      pincode:'',
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
  signupUser() {

  //   if(type==3){
  //   if (this.state.companyname.trim().length <= 0) {
  //     Alert.alert("Please enter the Company Name")
  //   }
  //  }

  //   else if (this.state.companyemail.trim().length <= 0) {
  //     Alert.alert("Please enter the Company Email")
  //   }
  //   else if (this.state.personname.trim().length <= 0) {
  //     Alert.alert("Please enter the Person Name")
  //   }
  //   else if (this.state.city.trim().length <= 0) {
  //     Alert.alert("Please Select a City")
  //   }
  //   else if (this.state.address.trim().length <= 0) {
  //     Alert.alert("Please enter the address")
  //   }
  //   else if (this.state.pincode.trim().length <= 0) {
  //     Alert.alert("Please enter the Pin Code")
  //   }
  //   else {

      AsyncStorage.setItem("isloggedin","Yes");
      this.props.navigation.navigate("BottomTab");

      // this.setState({ loading: true });
      // const networkServiceObj = new NetworkService()
      // let input = {
      //   "name": this.state.companyname,

      // }


      // networkServiceObj.loginService(input).then(res => {
      //   if (res) {
      //     console.log(res)

      //     let response = res

      //     console.log(response)



      //     if (response.status == 'Success') {
      //       console.log("otp", response.data.otp);
      //       this.props.navigation.navigate("OTPScreen",
      //         {
      //           otp: response.data.otp,
      //           phoneno: this.state.phone,
      //         });


      //     } else {

      //       Alert.alert(response.message)
      //     }
      //   }
      //   this.setState({ loading: false });

      // })
   // }
  }


  render() {
    const viewStyles =
      { marginTop: 40, marginLeft: 25, width: APP_WIDTH - 50, height: APP_HEIGHT / 2.3, alignItems: 'center', borderRadius: 10 }
      ;
    const textStyles = {
      height: 50, width: APP_WIDTH - 40, color: 'black', backgroundColor: '#5f8ede', borderRadius: 10, paddingLeft: 10, marginTop: 20, paddingTop: 10, paddingBottom: 15, color: "white"
    };

    const { navigation } = this.props;


    type = navigation.getParam('type', '');

    console.log("type=========>",type);

    return (

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView >
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

          <Text style={{ width: APP_WIDTH, textAlign: 'center', marginTop: 10, fontSize: 20, marginBottom: 10, color: '#515151', fontWeight: '600' }}>Tell us more about your company.</Text>
          {type==3?<View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 15 }}
              underlineColorAndroid="transparent"
              onChangeText={(companyname) => this.setState({ companyname })}
              returnKeyType='done'
              value={this.state.companyname}
              placeholder="Company Name"
              placeholderTextColor="grey"
              color="black"
              multiline={Platform.OS == 'android' ? true : false}
              autoCapitalize="none"
              multiline={false}
              keyboardType='default'
            />
            
          </View>:null}
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 15 }}
              underlineColorAndroid="transparent"
              onChangeText={(companyemail) => this.setState({ companyemail })}
              returnKeyType='done'
              value={this.state.companyemail}
              placeholder="Company Email"
              placeholderTextColor="grey"
              color="black"
              multiline={Platform.OS == 'android' ? true : false}

              autoCapitalize="none"
              multiline={false}
              keyboardType='default'
            />
            
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 15 }}
              underlineColorAndroid="transparent"
              onChangeText={(personname) => this.setState({ personname })}
              returnKeyType='done'
              value={this.state.personname}
              placeholder="Person name"
              placeholderTextColor="grey"
              color="black"
              multiline={Platform.OS == 'android' ? true : false}
          
              autoCapitalize="none"
              multiline={false}
              keyboardType='default'
            />
            
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 15 }}
              underlineColorAndroid="transparent"
              onChangeText={(city) => this.setState({ city })}
              returnKeyType='done'
              value={this.state.city}
              placeholder="Home/City"
              placeholderTextColor="grey"
              color="black"
              multiline={Platform.OS == 'android' ? true : false}
             
              autoCapitalize="none"
              multiline={false}
              keyboardType='default'
            />
            
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 15 }}
              underlineColorAndroid="transparent"
              onChangeText={(address) => this.setState({ address })}
              returnKeyType='done'
              value={this.state.address}
              placeholder="Address"
              placeholderTextColor="grey"
              color="black"
              multiline={Platform.OS == 'android' ? true : false}
              
              autoCapitalize="none"
              multiline={false}
              keyboardType='default'
            />
            
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={{ flex: 1, marginLeft: 15 }}
              underlineColorAndroid="transparent"
              onChangeText={(pincode) => this.setState({ pincode })}
              returnKeyType='done'
              value={this.state.pincode}
              placeholder="Pin Code"
              placeholderTextColor="grey"
              color="black"
              multiline={Platform.OS == 'android' ? true : false}
              maxLength={6}
              autoCapitalize="none"
              multiline={false}
              keyboardType='numeric'
            />
            
          </View>
          
          <View style={styles.bottomView}>
           
            <TouchableOpacity style={{
              width: '80%', borderRadius: 15, backgroundColor: '#0066FF', marginRight: 40, marginLeft: 40,
              marginBottom: 10,
            }} 
           
            onPress={() => this.signupUser()}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 20, height: 50, padding: 10, textAlign: 'center', fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.loading &&
          <ProgressSpin />
        }
        </ScrollView>
      </SafeAreaView>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    width:APP_WIDTH,
    height:APP_HEIGHT,
    flex:1,
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