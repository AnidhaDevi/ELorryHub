import React, { Component } from "react"
import {
  Text, Dimensions
} from 'react-native'



import { BackHandler } from 'react-native';


const APP_WIDTH = Dimensions.get("window").width;
const APP_HEIGHT = Dimensions.get("window").height;

export default class PostTruckScreen extends React.Component {


  constructor(props) {
    super(props);


    this.state = {
      loading: false,
      strName: '',

    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

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

      <Text>Testing</Text>

    )
  }
}

