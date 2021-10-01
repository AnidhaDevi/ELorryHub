import Constants from '../Constants/Constants'
import {
    View,
    Dimensions,
    Alert,
    ToastAndroid, Platform
} from 'react-native'

export default class NetworkService {

    loginService(logindata) {
        //let strInput = JSON.stringify({username:logindata.username, password:logindata.password})
        let strInput = JSON.stringify(logindata)
        console.log("login service ==> ", strInput)

        let requesturl = Constants.ApiBaseUrl + 'v1/otp/generate?data=' + strInput

        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
            // body: JSON.stringify({
            //     data: '' + strInput,
            //     secondParam: 'yourOtherValue'
            // })

        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    otpService(logindata) {
        //let strInput = JSON.stringify({username:logindata.username, password:logindata.password})
        let strInput = JSON.stringify(logindata)
        console.log("login service ==> ", strInput)

        let requesturl = Constants.ApiBaseUrl + 'v1/otp/validate?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            //body: strInput
            body: JSON.stringify({
                data: '' + strInput,
                secondParam: 'yourOtherValue'
            })

        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    saveRegister(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'RestaurantRegister.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    profileInformation(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'ResProfileEdit.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                keys: "data",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    deliveryDetails(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'DeliveryDetail.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                keys: "data",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    saveEditProfile(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'ResProfileUpdate.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                keys: "data",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    loadDeliveryChargesInfo(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'DeliveryCharges.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    saveFeedback(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'Feedback.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                keys: "data",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    saveDeliveryRequest(param) {
        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'DeliveryRequest.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                keys: "data",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    loadDeliveryList(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'DeliveryList.php?data=' + strInput
        console.log("input ==>", requesturl)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    UpdateStatus(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'ResStatusUpdate.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                keys: "data",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    CancelReq(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'ResDeliveryReqCancel.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                keys: "data",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }



    loadResTransactionList(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'ResTransactionDetail.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    saveResOffer(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'ResOffer.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    loadDeliveryHistoryList(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'DeliveryHistory.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    loadResOfferList(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'ResOfferList.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    NotificationList(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'RestaurantNotification.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    dashboardService(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'dashboard'
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }

    forgetPassword(logindata) {
        //let strInput = JSON.stringify({username:logindata.username, password:logindata.password})
        let strInput = JSON.stringify(logindata)
        console.log("login service ==> ", strInput)

        let requesturl = Constants.ApiBaseUrl + 'ForgetPassword.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            //body: strInput
            body: JSON.stringify({
                data: '' + strInput,
                secondParam: 'yourOtherValue'
            })

        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
    loadPaymentList(param) {

        let strInput = JSON.stringify(param)
        let requesturl = Constants.ApiBaseUrl + 'RestaurantPaymentLog.php?data=' + strInput
        console.log("input ==>", requesturl, strInput)

        return fetch(requesturl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json', // <-- Specifying the Content-Type
            },
            body: strInput
        })
            .then((response) => //{ 
                // ToastAndroid.show(""+JSON.stringify(response., ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(response)); 

                response.json()//}
            )
            .then((responseJson) => {
                // ToastAndroid.show(""+JSON.stringify(responseJson), ToastAndroid.LONG);
                // Alert.alert(""+JSON.stringify(responseJson));
                return responseJson;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
}