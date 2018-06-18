import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Profile from '../components/Profile';
import Account from '../components/profile/Account';
import Laundry from '../components/profile/Laundry';
import Payment from '../components/profile/payment/Payment';

const profileNav = StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: (props) => ({
            title: 'Profile',
        })
    },
    Payment: {
        screen: Payment,
        navigationOptions: (props) => ({
            title: 'Payment',
        })
    },
    Laundry: {
        screen: Laundry,
        navigationOptions: (props) => ({
            title: 'Your Laundry',
        })
    },
    Account: {
        screen: Account,
        navigationOptions: (props) => ({
            title: 'Account',
        })
    }
})

export default profileNav;