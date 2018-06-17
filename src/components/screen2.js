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
import { colors, fonts } from '../theme'

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false}/>
      <Text style={styles.welcome}>
        THIS IS THE SECOND SCREEN!
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  homeContainer: {
    alignItems: 'center'
  },
  welcome: {
    fontFamily: fonts.light,
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  registration: {
    fontFamily: fonts.base,
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
  touchableOpacity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})