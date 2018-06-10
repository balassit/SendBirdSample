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

import { incrementAction, decrementAction } from "../actions/actionCreator";
class Screen1View extends Component {
  static navigationOptions = {
    title: "Screen1"
  };

  navigate() {
    this.props.navigation.navigate('Screen2')
  }

  render() {
    const { counterCount, incrementAction, decrementAction } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "yellowgreen",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{counterCount}</Text>
        <View style={{ height: 100, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => incrementAction()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              INCREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decrementAction()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              DECREMENT
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Go to next page"
          onPress={() =>
            this.navigate()
          }
          />
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