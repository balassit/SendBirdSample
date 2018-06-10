import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { colors, fonts } from '../theme'

import {
    StyleSheet,
    View,
    Button,
    Text,
    Image
  } from 'react-native';

export default class DrawerContent extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  navigateToScreen = (route) => () => {
      const navigate = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Home' onPress={this.navigateToScreen('Home')} />
        <Button title='Screen1' onPress={this.navigateToScreen('Screen1')} />
        <Button title='Screen2' onPress={this.navigateToScreen('Screen2')} />
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