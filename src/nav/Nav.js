import React from 'react'
import { StackNavigator } from 'react-navigation'

import Home from './Home'
import Screen1 from '../components/screen1'
import Screen2 from '../components/screen2'

const routeConfig = {
  Home: { screen: Home },
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
}

const StackNav = StackNavigator(routeConfig)

class Nav extends React.Component {
  render() {
    return (
      <StackNav />
    )
  }
}

export default StackNav
