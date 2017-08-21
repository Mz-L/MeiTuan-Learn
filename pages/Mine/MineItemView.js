/**
 * Created by Mz on 2017/8/19.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export  default  class  DivideLine extends  Component{

  render(){
    return(
      <View style={styles.viewStyle}>
        {/*左*/}
        <View style={styles.viewLeftStyle}>
          <Image source={{uri:this.props.option.icon}} style={styles.imageLeftStyle}/>
          <Text style={styles.textLeftStyle}>{this.props.option.titleLeft}</Text>
        </View>
        {/*右*/}
        <View style={styles.viewLeftStyle}>
          <Text style={styles.textRightStyle}>{this.props.option.titleRight}</Text>
          <Image source={{uri:'trip_travel__lion_more_date_icon'}} style={styles.imageRightStyle}/>
        </View>
      </View>
    )
  }
}

const  styles=StyleSheet.create({
  viewStyle:{
    height:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:7,
    paddingRight:5
  },
  viewLeftStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  imageLeftStyle:{
    width:18,
    height:18
  },
  imageRightStyle:{
    width:9,
    height:9
  },
  textLeftStyle:{
    marginLeft:5
  },
  textRightStyle:{
    color:'gray',
    fontSize:10,
    marginRight:5
  }

});