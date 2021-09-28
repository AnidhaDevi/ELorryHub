import {
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Alert,
    ToastAndroid, Modal, Platform, StyleSheet, StatusBar
} from 'react-native'


const BaseUrl = "http://192.168.2.28/elorrybook/public/api/";

export default {
    APP_WIDTH: Dimensions.get("window").width,
    APP_HEIGHT: Dimensions.get("window").height,
    ApiBaseUrl: BaseUrl
}