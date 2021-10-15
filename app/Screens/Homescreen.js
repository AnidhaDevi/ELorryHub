/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert,
    Modal,
    Button,
    ToastAndroid,
    ImageBackground,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    KeyboardAvoidingView,
    Picker,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import ProgressSpin from '../Components/ProgressSpin';
import { BackHandler } from 'react-native';
import Header from '../CustomViews/Header';

import HomeListCell from '../CustomViews/HomeListCell';
import { FlatList } from 'react-native-gesture-handler';
import NetworkService from '../Services/NetworkService';
const APP_WIDTH = Dimensions.get('window').width;
const APP_HEIGHT = Dimensions.get('window').height;




export default class Homescreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            deliveryList: [],
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );

    }
    componentWillUnmount() {
        BackHandler.removeEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
    }

    componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackButtonClick,
        );
        // this.loadHomeList();
    }

    handleBackButtonClick() {
        BackHandler.exitApp();
        return true;
    }

    // loadHomeList() {
    //     this.setState({ loading: true });
    //     const networkServiceObj = new NetworkService();
    //     let input = { user_id: user_id };
    //     networkServiceObj.loadMyPropertyList(input).then(res => {
    //         if (res) {
    //             console.log(res);
    //             let response = res;
    //             console.log('@@ Status : ' + response.status);
    //             console.log('@@ Message : ' + response.message);
    //             if (response.status === 'success') {
    //                 let dList = response.PropertyList;
    //                 this.setState({ deliveryList: dList });
    //             }
    //         }
    //         this.setState({ loading: false });
    //     });
    // }

    _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => this.rowSelected(item)}>
                <HomeListCell
                    CategoryId={item.CategoryId}
                    propertyAmount={item.propertyAmount}
                    ProjectName={item.ProjectName}
                    Propertyimage={item.Propertyimage}
                    House={item.House}
                    Parking={item.Parking}
                    Address={item.Address}
                />
            </TouchableOpacity>
        );
    };

    rowSelected(item) {
        console.log('Item', item);
        this.props.navigation.push('PropertyDetailsNew', {
            PropertyId: item.PropertyId,
            isPropertyEditable: false,
        });
    }


    render() {
        const { navigation } = this.props;
        const dropdownStyles = {
            width: APP_WIDTH / 1.7,
            height: 48,
            backgroundColor: 'white',
            borderRadius: 5,
            marginRight: 1,
        };


        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    strTitle="Home"
                    navigate={this.props.navigation}
                    back={true}
                />
                <View style={{
                    width: APP_WIDTH / 1, height: APP_HEIGHT / 14, borderRadius: 20, backgroundColor: '#F7F6F9', flexDirection: 'row'
                    , alignContent: 'center', justifyContent: 'center', alignItems: 'center', padding: 5, margin: 20
                }} >
                    <TouchableOpacity style={{ flex: 1, width: APP_WIDTH / 2.5, height: APP_HEIGHT / 20, backgroundColor: '#FFFFFF', borderRadius: 20, margin: 5, alignContent: 'center', justifyContent: 'center', }}>
                        <Text style={{ color: 'black', fontSize: 18, textAlign: 'center', padding: 5, fontWeight: 'bold' }}>LOAD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, width: APP_WIDTH / 2.5, height: APP_HEIGHT / 20, backgroundColor: '#FFFFFF', borderRadius: 20, margin: 5 }}>
                        <Text style={{ color: 'black', fontSize: 18, textAlign: 'center', padding: 5, fontWeight: 'bold' }}>TRUCK</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: 'white', height: APP_HEIGHT, flex: 1 }}>
                    <FlatList
                        style={{ marginBottom: 20 }}
                        data={[
                            { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
                            { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
                            { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
                            { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
                            { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
                            { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
                            { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }
                        ]}
                        renderItem={this._renderItem}
                    // keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                {this.state.loading && <ProgressSpin />}
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    locationIcon: {
        margin: 15,
        height: 28,
        width: 20,
    },
    menuIcon: {
        resizeMode: 'contain',
        margin: 18,
        marginLeft: 5,
        height: 24,
        width: 35,
    },
    LocationSelectButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    selectText: {
        fontSize: 20,
        color: 'white',
    },
    selectDownIcon: {
        height: 10,
        width: 15,
        margin: 10,
    },
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    buttonnew: {
        position: 'absolute',
        padding: 10,
    },

    //   container: {
    //     alignItems: 'center',
    //     backgroundColor: '#088FFA',
    //     padding: 100
    //  },

    text: {
        color: '#ffffff',
        marginTop: 10,
    },

});



