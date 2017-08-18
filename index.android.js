/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainPage from './pages/Main/MainPage';

export default class MeiTuan extends Component {
  render() {
    return (
      <MainPage></MainPage>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
