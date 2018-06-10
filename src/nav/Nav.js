import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { DrawerNavigator } from 'react-navigation'

import { colors, fonts } from '../theme'
import Home from './Home'
import Screen1 from '../components/screen1'
import Screen2 from '../components/screen2'
import DrawerContent from "../components/Sidebar"

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
      drawer: {
        icon: () => (
          <Image
            source={require('../assets/signUpButton.png')}
            style={[styles.icon, { tintColor }]}
          />
      )}
    }
  },
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      title: 'Screen1',
      drawer: {
        icon: () => (
          <Image
            source={require('../assets/signUpButton.png')}
            style={[styles.icon, { tintColor }]}
          />
      )}
    }
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen2',
      drawer: {
        icon: () => (
          <Image
            source={require('../assets/signUpButton.png')}
            style={[styles.icon, { tintColor }]}
          />
      )}
    }
  }
}

const routeConfig = {
  contentComponent: DrawerContent,
  drawerWidth: 200,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
}

export default DrawerNavigator(routes, routeConfig)