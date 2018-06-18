import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import {
  StyleSheet,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';
import { colors, fonts, container, welcome, tabIcon, touchableOpacity} from '../theme'

import Input from './Input'
import Button from './Button'

class ProfileView extends Component {
  navigate(page) {
    this.props.navigation.navigate(page)
  }
  render() {
    return (
      <View style={container}>
        <StatusBar barStyle = "dark-content" hidden = {false}/>
        <Button onPress={() => this.navigate('Account')} title="Edit Account" />
        <Button onPress={() => this.navigate('Laundry')} title="Your Laundry" />
        <Button onPress={() => this.navigate('Payment')} title="Payment" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
};

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileView);

export default Profile;