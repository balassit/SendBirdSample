import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Profile from '../components/Profile';
import Account from '../components/profile/Account';

const stackNav = StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: (props) => ({
            title: 'Profile',
        })
    },
    Account: {
        screen: Account,
        navigationOptions: (props) => ({
            title: 'Account',
        })
    }
})

export default stackNav;