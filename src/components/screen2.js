import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";

import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import { colors, fonts } from '../theme'

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        THIS IS THE SECOND SCREEN!
      </Text>
    </View>
    );
  }
}