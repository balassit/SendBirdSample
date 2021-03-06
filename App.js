import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Button,
    TextInput
  } from 'react-native'
import { Provider } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

import store from './src/store'; //Import the store
import Home from './src/components/home' //Import the component file

export default class App extends Component {
    
    state = { // 1
        authCode: ''
      }
      onChangeText(authCode) { // 2
        this.setState({ authCode })
      }
      signUp() {
        Auth.signUp({ // 3
          username: 'balassit',
          password: 'Bal11595!',
          attributes: {
            phone_number: '+13369061736',
            email: 'streamsapp@gmail.com'
          }
        })
        .then(res => {
          console.log('successful signup: ', res)
        })
        .catch(err => {
          console.log('error signing up: ', err)
        })
      }
      confirmUser() { // 4
        const { authCode } = this.state
        Auth.confirmSignUp('balassit', authCode)
          .then(res => {
            console.log('successful confirmation: ', res)
          })
          .catch(err => {
            console.log('error confirming user: ', err)
          })
      }
    render() {
        return (
            <View style={styles.container}>
              <Button title='Sign Up' onPress={this.signUp.bind(this)} />
              <TextInput
                placeholder='Input Code'
                onChangeText={value => this.onChangeText(value)}
                style={styles.input}
              />
              <Button
                title='Confirm User'
                onPress={this.confirmUser.bind(this)}
              />
            </View>
          )
          /*
          <Provider store={store}>
            <Home />
          </Provider>
          */
    }
}
const styles = StyleSheet.create({
    input: {
      height: 50,
      backgroundColor: '#ededed',
      marginVertical: 10
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    }
  })