import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Animated,
  TouchableOpacity
} from 'react-native'
import { colors, fonts } from '../theme'

export default class Screen2 extends Component {
  static navigationOptions = {
    title: "Screen2"
  };
  navigate() {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "powderblue" }}>
        
      </View>
    );
  }
}