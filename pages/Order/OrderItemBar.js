/**
 * Created by Mz on 2017/8/20.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export  default  class OrderItemBar extends Component{

  render(){
    return(
      <View style={styles.viewStyle}>
        {this.renderItems(this.props.orderbars)}
      </View>
    )
  }

  renderItems(orderbars){
    var Items=[];
    for(var i=0;i<orderbars.length;i++){
      var bar=orderbars[i];
      if(bar.hasMsg){
        Items.push(
          <View key={i} style={styles.outViewStyle}>
            <View style={styles.innerViewStyle}>
              <Image style={{width:30,height:30}} source={{uri:bar.icon}}></Image>
              <Text>{bar.title}</Text>
            </View>

            {/*消息*/}
            <Text style={styles.textMsgStyle}>{bar.msgNumber}</Text>
          </View>
        )
      }else{
        Items.push(
          <View key={i} style={styles.outViewStyle}>
            <View style={styles.innerViewStyle}>
              <Image style={{width:30,height:30}} source={{uri:bar.icon}}></Image>
              <Text>{bar.title}</Text>
            </View>
          </View>
        )
      }
    }

    return Items;
  }
}

const  styles=StyleSheet.create({
  viewStyle:{
    height:55,
    flexDirection:'row',
    backgroundColor:'#F5FCFF',
    marginBottom:10
  },
  outViewStyle:{
    flex:1,
    alignItems:'center',
    marginTop:5
  },
  innerViewStyle:{
    alignItems:'center'
  },

  textMsgStyle:{
    width:11,
    height:11,
    borderRadius:6,
    textAlign:'center',
    backgroundColor:'red',
    color:'white',
    fontSize:8,
    position:'absolute',
    top:2,
    right:25
  }
});