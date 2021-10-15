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

import Card from '../Components/Card';


const APP_WIDTH = Dimensions.get("window").width;
const APP_HEIGHT = Dimensions.get("window").height;



export default class FirstScreen extends React.Component {


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

    signup(data) {


        console.log("DATA==============>",data);
        this.props.navigation.navigate("Registerscreen",
            {
                type: data,

            });

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

                    <Text style={{ width: APP_WIDTH, textAlign: 'center', marginTop: 10, fontSize: 20, marginBottom: 10, color: '#515151', fontWeight: '600' }}>What kind of service do you provide?</Text>

                    <Card style={styles.card}>
                    <TouchableOpacity onPress={() => this.signup(1)} style={{marginLeft:15,flexDirection:'row', justifyContent: 'center', //Centered vertically
                        alignItems: 'center',}}>
                        <Image style={{ marginLeft: 5, }}
                            source={require('../Images/truckoperator.png')} />
                        <View style={{ marginLeft: 5, flexDirection: 'column' }}>
                            <Text style={styles.sectionTitle}>Truck Operator</Text>
                            <Text style={styles.sectionTitle1}>I provide trasportation services,
                                I won lorries</Text>
                        </View>
                        </TouchableOpacity>
                    </Card>

                    <Card onPress={() => this.signup(2)} style={styles.card}>
                    <TouchableOpacity onPress={() => this.signup(2)} style={{marginLeft:15,flexDirection:'row', justifyContent: 'center', //Centered vertically
                        alignItems: 'center',}}>
                        <Image style={{ marginLeft: 5, }}
                            source={require('../Images/shipper.png')} />
                        <View style={{ marginLeft: 5, flexDirection: 'column' }}>
                            <Text style={styles.sectionTitle}>Shipper</Text>
                            <Text style={styles.sectionTitle1}>I own the good looking for
                                transportion services</Text>
                        </View>
                        </TouchableOpacity>
                    </Card>
                    <Card  style={styles.card}>
                        <TouchableOpacity onPress={() => this.signup(3)} style={{marginLeft:15,flexDirection:'row', justifyContent: 'center', //Centered vertically
        alignItems: 'center',}}>
                        <Image style={{ marginLeft: 5, }}
                            source={require('../Images/truckowner.png')} />
                        <View style={{ marginLeft: 5, flexDirection: 'column' }}>
                            <Text style={styles.sectionTitle}>Truck Owner</Text>
                            <Text style={styles.sectionTitle1}>I own the good looking for
                                transportion services</Text>
                        </View>
                        </TouchableOpacity>
                    </Card>



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

    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#515151',

    },
    sectionTitle1: {
        width: APP_WIDTH / 1.4,
        fontSize: 18,
        fontWeight: '600',
        color: '#515151',
    },
    card: {
        height: '20%',
        margin: 10,
        backgroundColor: 'white',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center',
        flexDirection: 'row'// Centered horizontally
    },
});