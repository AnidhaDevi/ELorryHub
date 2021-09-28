import React, { Component } from "react"
import { View, Text, ImageBackground, StyleSheet, Alert } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import splashImage from "../Images/splash_logo.png"
import { StackActions, NavigationActions } from 'react-navigation';
import { BackHandler } from 'react-native';



class InitialScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timePassed: false,
      deviceToken: '',
    }


    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

  }

  componentDidMount() {

    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);




    setTimeout(() => { this.setState({ timePassed: true }) }, 500)

    AsyncStorage.getItem("isloggedin").then((result) => {



      if (result == 'Yes') {


        AsyncStorage.getItem("user_id").then((result) => {

          user_id = result;

          this.setState({ strUserId: user_id })

        }).done();

        AsyncStorage.getItem("user_name").then((result) => {

          user_name = result;
          this.setState({ strUserName: user_name })


          this.props.navigation.navigate("FirstScreen",
            {
              user_id: this.state.strUserId,
              User_Name: this.state.strUserName,
            });
        }).done();

      }
      else {
        this.props.navigation.navigate("Login")
      }

    }).done();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    BackHandler.exitApp();
    return true;
  }
  render() {
    return (

      <View style={styles.container}>

        <ImageBackground source={splashImage} style={styles.image} />

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
export default InitialScreen;