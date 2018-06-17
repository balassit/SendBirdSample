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
import { colors, fonts, container, welcome, tabIcon, touchableOpacity} from '../../theme'

import Input from '../Input'
import Button from '../Button'

class AccountView extends Component {
  navigate(page) {
    this.props.navigation.navigate(page)
  }

  render() {
    const { changeForm } = this.props;
    return (
      <View style={container}>
      <StatusBar barStyle = "dark-content" hidden = {false}/>
      <Text>{changeForm}</Text>
        <Text style={welcome}>
          Account
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registration: {
    flex: 1,
    fontFamily: fonts.base,
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({
  type: state.type
});

const mapDispatchToProps = {
};

const Account = connect(mapStateToProps, mapDispatchToProps)(AccountView);

export default Account;