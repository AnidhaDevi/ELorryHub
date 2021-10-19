import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

export default class PostLoadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: '#6b8e23',
          }}>
          Post Load
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.input1}>
            <TextInput
              placeholder="From time"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('username', val)}
            />
          </View>
          <View style={styles.input1}>
            <TextInput
              placeholder="To Time"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('email', val)}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.input1}>
            <TextInput
              placeholder="From Location"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('username', val)}
            />
          </View>
          <View style={styles.input1}>
            <TextInput
              placeholder="To Location"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('email', val)}
            />
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="   Name"
            autoCapitalize="none"
            placeholderTextColor="#020000"
            onChangeText={val => this.onChangeText('email', val)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Weight"
            autoCapitalize="none"
            placeholderTextColor="#020000"
            onChangeText={val => this.onChangeText('phone_number', val)}
          />
        </View>

        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Truck Type"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('Role', val)}
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Trip Type"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('Role', val)}
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Load status"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('Role', val)}
            />
          </View>
        </View>
        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Fright"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('Role', val)}
            />
          </View>
        </View>
        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Capacity"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('Role', val)}
            />
          </View>
        </View>
        <View style={styles.input}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Add discribtion"
              autoCapitalize="none"
              placeholderTextColor="#020000"
              onChangeText={val => this.onChangeText('Role', val)}
            />
          </View>
        </View>
        <View style={styles.input3}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
            Submit
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 20,
    width: 350,
    height: 55,
    backgroundColor: '#E5E5E5',
    margin: 10,
    padding: 8,
    color: '#040404',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  input1: {
    marginLeft: 20,
    width: 160,
    height: 55,
    backgroundColor: '#E5E5E5',
    margin: 10,
    padding: 8,
    color: '#040404',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    alignSelf: 'center',
  },
  input3: {
    marginLeft: 20,
    width: 160,
    height: 55,
    backgroundColor: '#6b8e23',
    margin: 10,
    padding: 8,
    color: '#040404',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#ffff',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});
