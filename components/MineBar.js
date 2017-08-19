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
          <TouchableOpacity key={i} style={styles.viewStyle} activeOpacity={0.5} onPress={ ()=>{alert(8)} }>
            <Image style={styles.imageStyle} source={{uri:img.icon}}></Image>
            <Text style={styles.msgStyle}>{img.msgNumber}</Text>
          </TouchableOpacity>
        )
      }else{
        items.push(
          <TouchableOpacity key={i} style={styles.viewStyle} activeOpacity={0.5} onPress={ ()=>{alert(8)} }>
            <Image style={styles.imageStyle} source={{uri:img.icon}}></Image>
          </TouchableOpacity>
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
  viewStyle:{
    paddingTop:5,
    height:30
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
    top:1,
    right:1,
    fontSize:8,
    color:'white',
    textAlign:'center'
  }
});