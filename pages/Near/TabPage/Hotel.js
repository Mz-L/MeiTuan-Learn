/**
 * Created by Mz on 2017/8/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import NearItem from './NearItem';
import Screen from  '../../../utils/Screen';

var col=4;
var viewWidth=70;
var marginTop=10;
var marginLeft=(Screen.w - viewWidth*col)/(col+1);

export  default class Hotel extends  Component{


  constructor(props){
    super(props);
    var ds=new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2});
    this.state= {
      dataSource:ds.cloneWithRows(this.props.items.nearbeans),
      headerSelectedIndex:0,
      items:this.props.items
    }
  }

  render(){
    return(
        <ListView
            dataSource={this.state.dataSource}
            renderRow={ (rowDate)=> this.renderItem(rowDate) }
            renderHeader={ ()=> this.renderHeaderItem(this.state.items.topLables)}
        >
        </ListView>
    )
  }

  renderItem(rowDate){
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={ ()=> this.clickItem(rowDate)}>
          <NearItem rowDate={rowDate}/>
        </TouchableOpacity>
    )
  }

  clickItem(rowDate){
    Alert.alert(
        'Item Title',
        rowDate.storeName,
        [
          {text: '取消', onPress: () => alert('已取消')},
          {text: '确定', onPress: () => alert('已确定')}
        ]
    )

  }

  renderHeaderItem(topLables){
    if(topLables==null) return;

    return (
        <View style={styles.viewHeaderStyle}>
          {this.renderHeaderTags(topLables)}
        </View>
    )

  }

  renderHeaderTags(topLables){
    var headerTags=[];
    for(var i=0;i<topLables.length;i++){
      var str=topLables[i];
      headerTags.push(
          this.renderTag(str,i)
      )
    }
    return headerTags;

  }

  renderTag(str,i){

    var bgColor=this.state.headerSelectedIndex==i?'#FF4644':'white';
    var textColor=this.state.headerSelectedIndex==i?'white':'gray';

    return (
        <TouchableOpacity
            key={i} style={[styles.viewHeaderTagStyle,{backgroundColor:bgColor}]}
            activeOpacity={0.7}
            onPress={ ()=>this.clickTag(i) }
        >
          <Text style={[styles.textTagStyle,{color:textColor}]}>{str}</Text>
        </TouchableOpacity>
    )
  }

  clickTag(i) {
    this.setState({
      headerSelectedIndex: i
    });
  }

}

const  styles=StyleSheet.create({
  viewStyle:{
    flex:1
  },
  viewHeaderStyle:{
    height:70,
    backgroundColor:'#dddddd',
    flexDirection:'row',
    flexWrap:'wrap'
  },

  viewHeaderTagStyle:{
    width:viewWidth,
    height:20,
    borderRadius:10,
    marginLeft:marginLeft,
    marginTop:marginTop,
    justifyContent:'center',
    alignItems:'center'
  },
  textTagStyle:{
    fontSize:12
  }

});