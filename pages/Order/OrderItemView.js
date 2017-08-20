/**
 * Created by Mz on 2017/8/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export  default class OrderItemView extends Component{

  render(){
    return(
      <View style={styles.viewStyle}>
        {/*左边*/}
        <View style={styles.viewLeftStyle}>
          <Text style={styles.textLeftStyle}>{this.props.option.titleLeft}</Text>
        </View>
        {/*右边*/}
        <View style={styles.viewRightStyle}>
          <Text style={styles.textRightStyle}>{this.props.option.titleRight}</Text>
          <Image style={styles.imageStyle} source={{uri:'trip_travel__lion_more_date_icon'}}></Image>
        </View>
      </View>
    )
  }

}

const  styles=StyleSheet.create({
  viewStyle:{
    height:35,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#dddddd'
  },
  viewLeftStyle:{
    justifyContent:'center'
  },
  viewRightStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  imageStyle:{
    width:9,
    height:12,
    marginRight:5,
    marginLeft:5
  },
  textLeftStyle:{
    fontSize:14,
    color:'#4E4E4E',
    marginLeft:10
  },
  textRightStyle:{
    color:'#9F9F9F',
    fontSize:12
  }
});