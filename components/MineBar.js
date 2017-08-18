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


export default class MineBar extends Component {
  render() {
    return (
        <View style={styles.topBarStyle}>
          {this.renderItem()}
        </View>
    );
  }

  renderItem(){
    var icons = this.props.icons;
    var items = [];
    for(var i = 0;i<icons.length;i++){
      var img = icons[i];
      if(img.hasMsg){
        items.push(
          <View key={i}>
            <Image style={styles.imageStyle} source={{uri:img.icon}}></Image>
            <Text style={styles.msgStyle}>{img.msgNumber}</Text>
          </View>
        )
      }else{
        items.push(
          <View key={i}>
            <Image style={styles.imageStyle} source={{uri:img.icon}}></Image>
          </View>
        )
      }
    }
    return items;
  }
}

const styles = StyleSheet.create({
  topBarStyle:{
    height:40,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#06C1AE',
    justifyContent:'flex-end',
    paddingRight:5
  },
  imageStyle:{
    width:22,
    height:22,
    marginRight:5
  },
  msgStyle:{
    width:11,
    height:11,
    borderRadius:6,
    backgroundColor:'red',
    position:'absolute',
    top:-3,
    right:0,
    fontSize:8,
    color:'white',
    textAlign:'center'
  }
});