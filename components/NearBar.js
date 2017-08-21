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


export default class NearBar extends Component {
  render() {
    return (
        <View style={styles.topBarStyle}>
          {/*左*/}
          <TouchableOpacity style={styles.viewLeftStyle} activeOpacity={0.5}>
            <Text style={styles.textStyle}>天河</Text>
            <Image source={{uri:'trip_train_vector_submit_order_head_arrow'}} style={styles.imageLeftStyle}/>
          </TouchableOpacity>
          {/*右*/}
          <View style={styles.viewRightStyle}>
            <TextInput
                style={styles.inputStyle}
                underlineColorAndroid={ "transparent" }
                placeholder="找附近 商圈"
            >
            </TextInput>
            <Image source={{uri:'search_ic_suggestion_default'}} style={styles.imageRightStyle}/>
          </View>
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
  viewRightStyle:{
    flex:3,
    flexDirection:'row',
    alignItems:'center',
    marginRight:10
  },
  imageLeftStyle:{
    width:13,
    height:8
  },
  imageRightStyle:{
    width:18,
    height:18,
    position:'absolute',
    left:8,
    top:3
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