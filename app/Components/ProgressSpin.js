import React, {Component} from "react";
import {View, ActivityIndicator} from "react-native";

//Progress spinner for all the screens
export default class Index extends Component {
  
  //Progress spinner design
  render() {
   
    return (
      
      <View style={{position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,backgroundColor:'rgba(52, 52, 52, 0.8)'}}>
        <ActivityIndicator color={'black'} size={'large'}  />
      </View>
    )
  }
}
