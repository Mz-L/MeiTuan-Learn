/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomePage from '../Home/HomePage';
import MinePage from '../Mine/MinePage';
import NearPage from '../Near/NearPage';
import OrderPage from '../Order/OrderPage';
import ShopPage from '../Shop/ShopPage';

export default class MainPage extends Component {
  render() {
    return (
        <TabNavigator

        >
          <Text>MainPage</Text>
        </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({

});