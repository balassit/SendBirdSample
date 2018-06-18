import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";



import {
  AppRegistry,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';
import { colors, fonts, container, welcome, tabIcon, touchableOpacity, inputContainer} from '../../theme'

import Input from '../Input'
import Button from '../Button'

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: ''
}

class LaundryView extends Component {
  state = initialState

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  navigate(page) {
    this.props.navigation.navigate(page)
  }

  render() {
    return (
      <View style={container}>
      <StatusBar barStyle = "dark-content" hidden = {false}/>
        <View style={inputContainer}>
          <Input
            value={this.state.fist_name}
            placeholder="First Name"
            type='first_name'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.last_name}
            placeholder="Last Name"
            type='last_name'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.email}
            placeholder="Email"
            type='email'
            onChangeText={this.onChangeText}
          />
          <Input
            placeholder="Phone Number"
            type='phone_number'
            keyboardType='numeric'
            onChangeText={this.onChangeText}
            value={this.state.phone_number}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  type: state.type
});

const mapDispatchToProps = {
};

const Laundry = connect(mapStateToProps, mapDispatchToProps)(LaundryView);

export default Laundry;