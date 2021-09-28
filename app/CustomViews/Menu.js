import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Alert
} from 'react-native';
import { withTheme } from 'react-native-elements';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const APP_WIDTH = Dimensions.get("window").width;
  const APP_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#1F2229',
    padding: 10,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 20,
    fontWeight: '300',
    padding: 10,
    marginTop:10,
    marginBottom:10,
    color:'#ffffff'
  },
  imageLoginStyle: {
    height: 45,
    marginTop:30,
    width: APP_WIDTH/2,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  imageStyleNew: {
    height: 30,
    width:30,
    padding:10,
    resizeMode: 'stretch',
    alignItems: 'center',
  }, 
   imageStyle: {
    padding: 10,
    margin: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
});





export default function Menu({ onItemSelected }) {
  const viewStyles = 
  {marginTop:40, marginLeft: 25, width:APP_WIDTH-50, height:APP_HEIGHT/2.3, alignItems: 'center',borderRadius:10 }
;
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:25}}>
        <Image style={styles.imageLoginStyle}
          source={require('../Images/logo_menu_restaurant.png')}
        />
       
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu_list.png')}
        />
      <Text 
         onPress={() => onItemSelected('Home')}
        style={styles.item}
      >
        Home
      </Text>
      
      </View>
      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />
    
     
      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu_list.png')}
        />
      <Text
        onPress={() => onItemSelected('Delivery Request')}
        style={styles.item}
      >
        Delivery Request
      </Text>
      </View>
     
      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />
      
      
      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu_list.png')}
        />
      <Text 
        onPress={() => onItemSelected('Delivery History')}
        style={styles.item}
      >
        Delivery History
      </Text>
      
      </View>
      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />
      
      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu_list.png')}
        />
      <Text 
       onPress={() => onItemSelected('Transaction')}
        style={styles.item}
      >
        Transaction
      </Text>
      </View>
      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />
      
      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu_list.png')}
        />
      <Text 
         onPress={() => onItemSelected('Delivery Charges')}
        style={styles.item}
      >
        Delivery Charges
      </Text>
      </View>


      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />

      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu_list.png')}
        />
      <Text 
        onPress={() => onItemSelected('MyPayment')}
        style={styles.item}
      >
        My Payment
      </Text>
      </View>


      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />

      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu_list.png')}
        />
      <Text 
         onPress={() => onItemSelected('Discount Runner')}
        style={styles.item}
      >
        Discount for Runner
      </Text>
      </View>
      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />

      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu-profile.png')}
        />
      <Text 
        onPress={() => onItemSelected('Profile')}
        style={styles.item}
      >
        Profile
      </Text>
      </View>
      <View style={{flex: 1, height: 0.5, backgroundColor: '#5D5E61'}} />
      
      <View style={{ flexDirection: 'row', alignItems: 'center'}} >
      <Image style={styles.imageStyleNew}
          source={require('../Images/menu-logout.png')}
        />
      <Text 
          onPress={() => onItemSelected('Logout')}
        style={styles.item}
      >
        Logout
      </Text>
      </View>
      
    </ScrollView>
  );


}



Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
