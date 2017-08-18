/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import TopBar from '../../components/TopBar';

export default class HomePage extends Component {
  render() {
    return (
        <View>
          <TopBar></TopBar>
          <Text>HomePage</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});