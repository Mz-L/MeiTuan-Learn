/**
 * Created by Mz on 2017/8/18.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';


export default class TopBar extends Component {
  render() {
    return (
      <View style={styles.topBarStyle}>
        {/*左*/}
        <TouchableOpacity style={styles.viewLeftStyle} activeOpacity={0.5}>
          <Text style={styles.textStyle}>广州</Text>
          <Image source={{uri:'trip_train_vector_submit_order_head_arrow'}} style={styles.imageLeftStyle}/>
        </TouchableOpacity>
        {/*中*/}
        <View style={styles.viewCenterStyle}>
          <TextInput
            style={styles.inputStyle}
            underlineColorAndroid={ "transparent" }
            placeholder="糕点 商圈"
          >
          </TextInput>
          <Image source={{uri:'search_ic_suggestion_default'}} style={styles.imageCenterStyle}/>
        </View>
        {/*右*/}
        <TouchableOpacity style={styles.viewRightStyle} activeOpacity={0.5}>
          <Image source={{uri:'scan'}} style={styles.imageRightStyle}/>
          <Text style={styles.textStyle}>扫码</Text>
        </TouchableOpacity>
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
  viewLeftStyle:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  viewCenterStyle:{
    flex:3,
    flexDirection:'row',
    alignItems:'center'
  },
  viewRightStyle:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  imageLeftStyle:{
    width:13,
    height:8
  },
  imageCenterStyle:{
    width:18,
    height:18,
    position:'absolute',
    left:8,
    top:3
  },
  imageRightStyle:{
    width:19,
    height:19
  },
  textStyle:{
    color:'white'
  },
  inputStyle:{
    flex:1,
    height:28,
    padding:0,
    paddingLeft:30,
    borderRadius:10,
    backgroundColor:'white',
    fontSize:12
  }

});