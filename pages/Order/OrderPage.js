/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import OrderBar from '../../components/OrderBar';
import OrderItemBar from './OrderItemBar';
import OrderItemView from './OrderItemView';


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