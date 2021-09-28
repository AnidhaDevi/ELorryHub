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
        BackHandler.exitApp();
        return true;
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
                        <Text style={styles.sectionTitle}>Basic CardView Example</Text>
                    </Card>

                </View>

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
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    card: {
        height: 200,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
});