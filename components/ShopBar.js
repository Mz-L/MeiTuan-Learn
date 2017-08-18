/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class ShopBar extends Component {
  render() {
    return (
        <View style={styles.topBarStyle}>
          <Text style={styles.textStyle}>逛一逛</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  topBarStyle:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#06C1AE'
  },
  textStyle:{
    paddingLeft:5,
    color:'white'
  }
});