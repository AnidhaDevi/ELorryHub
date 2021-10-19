import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';
import react from 'react';
import React from 'react';
import {List, Avatar} from 'react-native-paper';

//const deviceHeight = Dimensions.get("window").height;
const deviceHeight = Dimensions.get('window').height;

export class Log_out_fun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };

  close = () => {
    this.setState({show: false});
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderTitle = () => {
    const {title} = this.props;
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#182E44',
            fontSize: 20,
            fontWeight: '500',
            marginTop: 15,
            marginBottom: 20,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  renderContent = () => {
    const {data} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          marginBottom: 30,
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{}}>
          <Avatar.Image
            source={require('../Images/smile.gif')}
            size={70}
            style={{
              marginTop: -40,
              marginVertical: 10,
              marginHorizontal: 10,
              borderWidth: 3,
              borderColor: '#fff',
              backgroundColor: '#fff',
              alignSelf: 'flex-start',
            }}
          />
          <Text style={{paddingLeft: 10, fontSize: 20, alignSelf: 'center'}}>
            𝐂𝐚𝐧𝐜𝐞𝐥
          </Text>
        </View>

        <View style={{}}>
          <Avatar.Image
            source={require('../Images/done.gif')}
            size={70}
            style={{
              marginTop: -40,
              marginVertical: 10,
              marginHorizontal: 10,
              borderWidth: 3,
              borderColor: '#fff',
              backgroundColor: '#fff',
              alignSelf: 'flex-start',
            }}
          />
          <Text style={{paddingLeft: 10, fontSize: 20, alignSelf: 'center'}}>
            𝐎𝐤
          </Text>
        </View>
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View
        style={{
          height: 50,
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: 20,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'normal', color: '#182E44'}}>
          {item.name}
        </Text>
      </View>
    );
  };

  renderSeperator = () => (
    <View
      style={{
        opacity: 0.1,
        backgroundColor: '#182E44',
        height: 2,
      }}
    />
  );

  render() {
    let {show} = this.state;
    const {onTouchOutside, title} = this.props;
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end',
          }}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              paddingHorizontal: 10,
              maxHeight: deviceHeight * 0.4,
            }}>
            {this.renderTitle()}
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}
