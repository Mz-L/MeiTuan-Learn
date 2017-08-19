/**
 * Created by Mz on 2017/8/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export  default  class  DivideSmallLine extends  Component{

  render(){
    return(
        <View style={styles.viewStyle}>
        </View>
    )
  }
}

const  styles=StyleSheet.create({
  viewStyle:{
    height:1,
    backgroundColor:'#dddddd',
    marginLeft:10
  }

});