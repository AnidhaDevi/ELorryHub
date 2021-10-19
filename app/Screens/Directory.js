// import React from 'react'
// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   TextInput,
//   Dimensions,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   SafeAreaView, Modal, Platform
// } from 'react-native'
// import AsyncStorage from "@react-native-community/async-storage"
// import { StackActions, NavigationActions } from 'react-navigation';
// import NetworkService from "../Services/NetworkService"
// import ProgressSpin from '../Components/ProgressSpin';
// import { BackHandler } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import DeviceInfo from 'react-native-device-info';
// import { ScrollView } from 'react-native-gesture-handler';

// const APP_WIDTH = Dimensions.get("window").width;
// const APP_HEIGHT = Dimensions.get("window").height;

// var type;

// export default class Directoryscreen extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       phone: '',
//       password: '',
//       loading: false,
//       strUserId: '',
//       strUserName: '',
//       deviceToken: '',
//       registerToken: '',
//     }

//     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
//   }

//   async componentDidMount() {

//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

//     AsyncStorage.getItem("Token").then((result) => {

//       let TOKEN = result;

//       this.setState({ deviceToken: TOKEN })

//     }).done();

//   }
//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
//   }
//   handleBackButtonClick() {
//     this.props.navigation.goBack(null);
//     return true;
//   }

//   render() {
//     return (

//       <Text>Directory</Text>

//     )
//   }
// }
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScroolView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Image,
  Header,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
const DATA = [
  {
    id: '1',
    title: 'Elhaa Transport',
    location: 'Covai.Tn',
    role: 'Transporter',
  },
  {
    id: '2',
    title: 'Rdimeena parcel service',
    location: 'Chennai.TN',
    role: 'TruckOwneer',
  },
  {
    id: '3',
    title: 'Google',
    location: 'Thanjavur.TN',
    role: 'Driver',
  },
  {
    id: '4',
    title: 'Ragul',
    location: 'Trichy.TN',
    role: 'Broker',
  },
  {
    id: '5',
    title: 'Rocket',
    location: 'Pondy.TN',
    role: 'Broker',
  },
  {
    id: '6',
    title: 'Sairam',
    location: 'Thiruvarur.TN',
    role: 'Driver',
  },
  {
    id: '7',
    title: 'RKR Transport',
    location: 'Madurai.TN',
    role: 'Transporter',
  },
  {
    id: '8',
    title: 'onsite overs',
    location: 'Thirunalvali.TN',
    role: 'Transporter',
  },
  {
    id: '9',
    title: 'John',
    location: 'Kerala.TN',
    role: 'Driver',
  },
  {
    id: '10',
    title: 'Depack',
    location: 'Thani.TN',
    role: 'Broker',
  },
  {
    id: '12',
    title: 'Srinivasan',
    location: 'Thani.TN',
    role: 'TruckOwneer',
  },
];
const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;

const Item = ({title, role, location}) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#ffff',
            borderRadius: 100,
          }}>
          <Image
            style={{width: 46, height: 48, alignSelf: 'center'}}
            source={require('../Images/truckowner.png')}
          />
        </View>

        <Text style={styles.title}> {title}</Text>
      </View>
      <Text style={styles.title1}>📍 {location}</Text>
      <Text style={styles.title2}>𝐑𝐎𝐋𝐋:{role}</Text>
      <TouchableOpacity>
        <Icon
          name="share-square"
          color="#5f9ea0"
          size={20}
          style={{left: 310, marginTop: -20}}
        />
      </TouchableOpacity>
    </View>
    {/* </View> */}
  </TouchableOpacity>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} role={item.role} location={item.location} />
  );

  return (
    <View
      style={{
        flex: 1,
        width: APP_WIDTH,
        height: APP_HEIGHT,
        marginBottom: '25%',
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#FFFFFF', '#FFFFFF']}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: APP_WIDTH,
            height: 50,
            flexDirection: 'row',
            backgroundColor: 'clear',
            padding: 5,
          }}>
          <TouchableOpacity style={{}} onPress={() => this.goBack()}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                paddingTop: 7,
                paddingLeft: 2,
              }}>
              <Image
                style={{width: APP_WIDTH / 15, height: APP_WIDTH / 15}}
                source={require('../Images/ic_menu_home.png')}></Image>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 1,
              marginTop: 3,
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                height: 30,
                marginTop: 5,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '700',
                color: '#3669C9',
              }}>
              Directory
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
              alignItems: 'flex-end',
              paddingTop: 7,
              paddingLeft: 2,
            }}>
            <Image
              style={{width: APP_WIDTH / 15, height: APP_WIDTH / 15}}
              source={require('../Images/bell.png')}></Image>
          </View>
        </View>
      </LinearGradient>

      <View
        style={{
          width: APP_WIDTH,
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              color: '#4169e1',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 20,
              marginHorizontal: 20,
              textAlign: 'center',
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 20,
              color: '#708090',
            }}>
            Transporter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginHorizontal: 20,
              marginTop: 20,
              color: '#708090',
            }}>
            Agent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 20,
              color: '#708090',
            }}>
            Driver
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginHorizontal: 20,
              marginTop: 20,
              color: '#708090',
            }}>
            TruckOwneer
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ViewStyle2}>
        <View style={{marginLeft: 5}}>
          <Icon name="search" color="#AAAAAA" />
        </View>
        <TextInput
          // onChangeText={text => this.searchData(text)}
          // value={this.state.text}
          placeholder="Search"
          style={styles.searchBar}
        />
      </View>

      <View
        style={{
          marginTop: 5,
          flexDirection: 'column',
          marginTop: 20,
          backgroundColor: '#F6F6F6',
          marginBottom: 20,
        }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    marginBottom: 10,
    color: '#000000',
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 18,
    elevation: 15,
  },
  title: {
    fontSize: 18,

    fontWeight: 'bold',
    padding: 10,
    color: '#696969',
  },
  title1: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    left: 20,
    color: '#808080',
  },
  title2: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    left: 18,
    color: '#808080',
  },
  listhead: {
    height: '150%',
    flexDirection: 'column',
    marginTop: 20,
    // backgroundColor: '#c0c0c0',
  },
  ViewStyle2: {
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    backgroundColor: '#ffff',
    height: '7%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    height: 40,
    width: 40,
    alignContent: 'flex-start',
    marginTop: 5,
  },
  tinyLog: {
    height: 20,
    width: 20,
    right: -150,
    marginTop: 20,
    opacity: 0.5,
  },
  list: {
    height: '14%',
    width: '90%',
    backgroundColor: '#fffafa',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 35,
    marginTop: 10,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    marginBottom: 100,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 30,
    height: APP_HEIGHT - 3000,
    width: APP_WIDTH - 70,
    borderRadius: 30,
    alignSelf: 'center',
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#a9a9a9',
    marginHorizontal: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    flexDirection: 'row',
  },
  inputText: {
    color: '#4169e1',
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: '#000000',
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    left: '350%',
  },
  row: {
    flexDirection: 'row',
    height: '10%',
    width: '30%',
    marginLeft: 10,
    borderRadius: 15,
  },
  cont1: {
    height: '20%',
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#ffa500',
    borderWidth: 3,
    backgroundColor: '#d2b48c',
    color: '#000000',
  },
  cont2: {
    height: '20%',
    right: -35,
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#a9a9a9',
    borderWidth: 3,
  },
  cont3: {
    height: '20%',
    right: -40,
    marginTop: 20,

    borderRadius: 20,
    borderColor: '#a9a9a9',
    borderWidth: 3,
  },
  cont4: {
    height: '20%',
    marginTop: 20,
    right: -45,
    borderRadius: 20,
    borderColor: '#a9a9a9',
    borderWidth: 3,
  },
  list1: {
    height: '10%',
    width: '90%',
    backgroundColor: '#fffafa',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 35,
  },
  list2: {
    height: '10%',
    width: '90%',
    backgroundColor: '#fffafa',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 35,
  },
  list3: {
    height: '10%',
    width: '90%',
    backgroundColor: '#fffafa',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 35,
  },
  list4: {
    height: '10%',
    width: '90%',
    backgroundColor: '#fffafa',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 35,
  },
  list5: {
    height: '10%',
    width: '90%',
    backgroundColor: '#fffafa',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 35,
  },
  searchBar: {
    fontSize: 16,
    margin: 10,
    width: '75%',
    height: 50,
  },
});

export default App;
