import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'

import { colors, fonts } from '../theme'
import Home from './Home'
import Screen1 from '../components/screen1'
import Screen2 from '../components/screen2'
import stackNav from './StackNav';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
})
const routes = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signInButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )}
  },
  stackNav: {
    screen: stackNav,
    navigationOptions: {
      tabBarLabel:"Profile",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signInButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )}
  },
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      title: 'Screen1',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signInButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )}
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen2',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/signInButton.png')}
          style={[styles.icon, { tintColor }]}
        />
      )}
  }
}

const routeConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary,
    indicatorStyle: { backgroundColor: colors.secondary },
    labelStyle: {
      fontFamily: fonts.base,
      fontSize: 12
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      paddingBottom: 3
    },
  }
}

export default TabNavigator(routes, routeConfig)
