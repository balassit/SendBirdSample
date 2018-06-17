import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Animated,
  Dimensions,
  StatusBar
} from 'react-native'

import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'

import { logOut } from '../actions'
import { colors, fonts, container, welcome, tabIcon, touchableOpacity} from '../theme'
const { width, height } = Dimensions.get('window')

class Home extends React.Component {
  state = {
    username: ''
  }
  AnimatedScale = new Animated.Value(1)
  componentDidMount() {
    this.animate()
  }
  logout() {
    Auth.signOut()
      .then(() => {
        this.props.dispatchLogout()
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }
  navigate(page) {
    this.props.navigation.navigate(page)
  }
  animate() {
    Animated.timing(
      this.AnimatedScale,
      {
        toValue: .8,
        duration: 1250,
        useNativeDriver: true
      }
    ).start(() => {
      Animated.timing(
        this.AnimatedScale,
        {
          toValue: 1,
          duration: 1250,
          useNativeDriver: true
        }
      ).start(() => this.animate())
    })
  }
  render() {
    return (
      <View style={container}>
        <StatusBar barStyle = "dark-content" hidden = {false}/>
        <Text style={welcome}>Welcome</Text>
        <Text onPress={this.logout.bind(this)} style={welcome}>Logout</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchLogout: () => logOut()
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)