/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import NearBar from '../../components/NearBar';

export default class NearPage extends Component {
  render() {
    return (
        <View>
          <NearBar></NearBar>
          <Text>NearPage</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});