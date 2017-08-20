/**
 * Created by Mz on 2017/8/19.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Screen from '../../utils/Screen';
var col = 5;
var imageWidth = 50;
var marginLeft = (Screen.w-imageWidth*col)/(col+1);

export default class HomeTop extends Component {

  constructor(props){
    super(props);
    this.state={
      currentPage:0
    }
  }

  render() {
    return (
      <View>
        {/*分类图标*/}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={ (e)=>this.pageEnd(e) }
        >
          {/*第一页*/}
          <View style={styles.viewPageStyle}>
            {this.renderCategorys(1)}
          </View>
          {/*第二页*/}
          <View style={styles.viewPageStyle}>
            {this.renderCategorys(2)}
          </View>
        </ScrollView>
        {/*指示器*/}
        <View style={styles.viewCirleStyle}>
          {this.renderCirles(2)}
        </View>
      </View>
    );
  }

  renderCategorys(n){
    var cateData = this.props.categorys;
    if(cateData.length<=0) return;

    var items = [];
    var len = cateData.length;
    if(n==1){
      for(var i = 0;i<len/2;i++){
        var item = cateData[i];
        items.push(
            this.renderItems(i,item)
        )
      }
    }
    else if(n==2){
      for(var i = len/2;i<len;i++){
        var item = cateData[i];
        items.push(
            this.renderItems(i,item)
        )
      }
    }
    console.log(items);
    return items;
  }

  pageEnd(e){
    var currX = e.nativeEvent.contentOffset.x;
    var page = Math.round(currX/Screen.w);
    this.setState({currentPage:page});
  }

  renderItems(i,item){
    return (
      <TouchableOpacity key={i} style={styles.outViewStyle} onPress={ ()=>this.clickIcon(item) }>
        <Image style={styles.imageStyle} source={{uri:item.icon}}></Image>
        <Text style={styles.textStyle}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  clickIcon(item){
    alert(item.title)
  }

  renderCirles(n){
    var cirles = [];
    for(var i = 0;i<n;i++){
      var bgColor = this.state.currentPage==i?'#06C1AE':'#dddddd';
      cirles.push(
        <Text key={i} style={[styles.textCirleStyle,{backgroundColor:bgColor}]}></Text>
      )
    }
    return cirles;
  }

}

const styles = StyleSheet.create({

  viewPageStyle:{
    width:Screen.w,
    height:160,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  outViewStyle:{
    width:imageWidth,
    height:80,
    marginLeft:marginLeft
  },
  imageStyle:{
    width:imageWidth,
    height:imageWidth,
    marginTop:5
  },
  textStyle:{
    textAlign:'center'
  },
  viewCirleStyle:{
    width:Screen.w,
    height:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textCirleStyle:{
    width:8,
    height:8,
    borderRadius:4,
    margin:4
  }

});