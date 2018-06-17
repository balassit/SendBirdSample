import React, { Component } from "react";
import { connect } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import { colors, fonts, container, welcome, tabIcon, touchableOpacity} from '../theme'

import { incrementAction, decrementAction } from "../actions/actionCreator";
class Screen1View extends Component {
  navigate() {
    this.props.navigation.navigate('Screen2')
  }

  render() {
    const { counterCount, incrementAction, decrementAction } = this.props;
    return (
      <View style={container}>
        <StatusBar barStyle = "dark-content" hidden = {false}/>
        <Text>{counterCount}</Text>
        <View style={{ height: 100, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => incrementAction()}
            style={touchableOpacity}
          >
            <Text
              style={welcome}
            >
              INCREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decrementAction()}
            style={touchableOpacity}
          >
            <Text
              style={welcome}
            >
              DECREMENT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

const Screen1 = connect(mapStateToProps, mapDispatchToProps)(Screen1View);

export default Screen1;