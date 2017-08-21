/**
 * Created by Mz on 2017/8/19.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export default class BackBar extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.topBarStyle} activeOpacity={0.7} onPress={ ()=>this.goBack() }>
          <Image source={{uri:'trip_flight_ic_home_page_back_bt'}} style={styles.imageStyle}/>
          <Text style={styles.textStyle}>返回</Text>
        </TouchableOpacity>
    );
  }

  goBack(){
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  topBarStyle:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#06C1AE'
  },
  imageStyle:{
    width:16,
    height:16,
    marginLeft:5
  },
  textStyle:{
    paddingLeft:5,
    color:'white'
  }
});