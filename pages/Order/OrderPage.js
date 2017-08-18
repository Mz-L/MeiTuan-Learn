/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import OrderBar from '../../components/OrderBar';

export default class OrderPage extends Component {
  render() {
    return (
        <View>
          <OrderBar></OrderBar>
          <Text>OrderPage</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});