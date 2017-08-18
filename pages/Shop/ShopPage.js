/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ShopBar from '../../components/ShopBar';

export default class ShopPage extends Component {
  render() {
    return (
        <View>
          <ShopBar></ShopBar>
          <Text>ShopPage</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});