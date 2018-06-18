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
  TextInput,
  Label,
  StatusBar
} from 'react-native';
import Stripe from 'react-native-stripe-api'
import { colors, fonts, container, welcome, tabIcon, touchableOpacity, inputContainer} from '../../../theme'

import Input from '../../Input'
import Button from '../../Button'

const initialState = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
}

class PaymentView extends Component {
  state = initialState

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  submitPayment() {
       alert("payment submitted");
       const apiKey = 'sk_test_7w7EQ12mWRzuzhn7eWqoc4u9';
       const client = new Stripe(apiKey);
       /*
       client.createToken('4242424242424242', '09', '2018', '111').then((token) => {
        console.log(token);
       }).catch(((err) => {
           console.log(err);
       }))
       */
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
            value={this.state.number}
            placeholder="1234 1234 1234 234"
            type='number'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.expMonth}
            placeholder="08"
            type='expMonth'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.expYear}
            placeholder="2018"
            type='expYear'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.cvc}
            placeholder="111"
            type='cvc'
            onChangeText={this.onChangeText}
          />
          <Button onPress={() => this.submitPayment()} title="Pay" />
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

const Payment = connect(mapStateToProps, mapDispatchToProps)(PaymentView);

export default Payment;