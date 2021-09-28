import React from 'react'
import {
    Text,
    Image,
    View,
    Dimensions,
    Alert,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    StyleSheet
} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import { StackActions, NavigationActions } from 'react-navigation';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

const APP_WIDTH = Dimensions.get("window").width;
const APP_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
    },
    separatorView:{
        backgroundColor:'#3b7adf', 
        width:'100%',
        height:1, 
        marginTop:15
    }
  });
  
export default class Header extends React.Component {
    goBack() {
        const{navigate,navigation,strTitle, back, sideMenu, addexpense, editProfile, viewSales}=this.props;
        if (back) {
            navigate.goBack();
        }
    }
   
    constructor(props) {
        super(props);
        this.state = {
          isModalVisible:false,
        };
    }

    componentDidMount() {
      
    }


    toggleModal() {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    onSalesPress() {
        this.setState({isModalVisible: !this.state.isModalVisible});
        const{navigate,navigation, strTitle, back, sideMenu,addexpense, editProfile, viewSales}=this.props;
        navigate.navigate('AddSalesEntry')
    }

    onStockPress() {
        this.setState({isModalVisible: !this.state.isModalVisible});
        const{navigate, navigation,strTitle, back, sideMenu,addexpense, editProfile, viewSales}=this.props;
        navigate.navigate('StockList')
    }

    onExpensePress() {
        this.setState({isModalVisible: !this.state.isModalVisible});
        const{navigate,navigation, strTitle, back, sideMenu,addexpense, editProfile, viewSales}=this.props;
        navigate.navigate('ExpenseList') 
        // navigate.navigate('')
    }

    EditProfilePress() {

    
       
        this.setState({isModalVisible: !this.state.isModalVisible});
        const{navigate, navigation,strTitle, back, sideMenu,addexpense, editProfile, viewSales}=this.props;
        navigate.navigate('EditProfile')
        // navigate.navigate('')
    }


    viewSalesPress() {
        this.setState({isModalVisible: !this.state.isModalVisible});
        const{navigate,navigation, strTitle, back, sideMenu,addexpense, editProfile, viewSales}=this.props;
        navigate.navigate('ViewSalesHistory')
        // navigate.navigate('')
    }

    addExpensePress() {
        this.setState({isModalVisible: !this.state.isModalVisible});
        const{navigate,navigation, strTitle, back, sideMenu,addexpense, editProfile, viewSales}=this.props;
        navigate.navigate('AddExpense') 
    }

    logOut(){
        const{navigate, navigation,strTitle, back, sideMenu,addexpense, editProfile, viewSales}=this.props;

        Alert.alert(
            'Logout',
            'Are you sure to logout?',
            [                
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'OK', onPress: () => {
                    AsyncStorage.removeItem("isloggedin");
                    AsyncStorage.removeItem("user_name");
                    AsyncStorage.removeItem("user_id");
                    AsyncStorage.removeItem("user_type");

                    //navigation.navigate('Login')
                    const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Login' })],
                    });
                    navigate.dispatch(resetAction);                    
                }
                },
            ],
            {cancelable: false},
        );  
    }

    render (){
        const{navigate,navigation,strTitle,back,sideMenu, addexpense, editProfile, viewSales}=this.props;
        // this.setState({isModalVisible:isModalVisible1});


        // const { navigation } = this.props;  


        //user_id = navigation.getParam('user_id', '');


        return(

            // <ImageBackground style={{flex:1,resizeMode:'cover',height:50,width:APP_WIDTH}} source= {require('../Images/Header-bg.png')}>           

            <LinearGradient 
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                // colors={['#2040b2', '#1873eb']} 
                colors={['#8c0001', '#8c0001']} 
                style={{
                   justifyContent: 'center', alignItems: 'center'
                }}
                 >
            <View style={{width:APP_WIDTH,height:50,flexDirection:'row',backgroundColor: 'clear',padding:5}}>
                
                <TouchableOpacity style={{}} onPress={()=>this.goBack()}>
                    <View style={{ flex:1,  justifyContent: 'flex-start', paddingTop:7,paddingLeft:2}}>
                        {back?
                            <Image style={{width: APP_WIDTH/10, height: APP_WIDTH/15}} source={require('../Images/back.png')}></Image>
                            :
                            null}
                        
                    </View>
                </TouchableOpacity> 
                <View style={{ flex:1,flexDirection: 'row', marginLeft:1,marginTop:3}}>
                    <Text style={{height: 30,marginTop:5, textAlign:'left',fontSize:20,fontWeight:'700',color:'white'}}>{strTitle}</Text>
                </View>

              

            </View>
            </LinearGradient>
            // </ImageBackground>

        )
    }
}