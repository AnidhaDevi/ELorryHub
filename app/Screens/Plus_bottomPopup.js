import {
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {navigation} from 'react-navigation';
import React from 'react';
import {List, Avatar} from 'react-native-paper';

const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

export class Plus_BottomPopup extends React.Component {
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
    return (
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#182E44',
            fontSize: 24,
            fontWeight: '500',
            marginTop: 10,
            marginBottom: 40,
          }}>
          New Post
        </Text>
      </View>
    );
  };

  renderContent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          marginBottom: 30,
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PostLoadScreen');
          }}>
          <Avatar.Image
            source={require('../Images/gallery.png')}
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
          <Text style={{paddingLeft: 20}}>Post Truck</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{}}>
          <Avatar.Image
            source={require('../Images/facebook.png')}
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
          <Text style={{paddingLeft: 20}}>Post Load</Text>
        </TouchableOpacity>
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
    const {navigation} = this.props;
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
              maxHeight: APP_HEIGHT * 0.4,
            }}>
            {this.renderTitle()}
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 10,
                marginBottom: 30,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => this.props.nav('PostLoad')}>
                <Avatar.Image
                  source={require('../Images/gallery.png')}
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
                <Text style={{paddingLeft: 20}}>Post Truck</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{}}>
                <Avatar.Image
                  source={require('../Images/facebook.png')}
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
                <Text style={{paddingLeft: 20}}>Post Load</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
