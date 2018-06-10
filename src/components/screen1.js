import React, { Component } from "react";
import { NavigationActions, DrawerNavigator } from "react-navigation";
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
  navigate() {
    this.props.navigation.navigate('Screen2')
  }

  render() {
    const { counterCount, incrementAction, decrementAction } = this.props;
    return (
      <View style={styles.container}>
        <Text>{counterCount}</Text>
        <View style={{ height: 100, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => incrementAction()}
            style={styles.touchableOpacity}
          >
            <Text
              style={styles.welcome}
            >
              INCREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decrementAction()}
            style={styles.touchableOpacity}
          >
            <Text
              style={styles.welcome}
            >
              DECREMENT
            </Text>
          </TouchableOpacity>
        </View>
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

const mapStateToProps = state => ({
  counterCount: state.CounterReducer.counter
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

const Screen1 = connect(mapStateToProps, mapDispatchToProps)(Screen1View);

export default Screen1;