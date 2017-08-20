/**
 * Created by Mz on 2017/8/19.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';


export default class HomeCenter extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        {this.renderItems()}
      </View>
    );
  }

  renderItems(){
    var items=this.props.items;
    if(items.length<=0) return;

    var Items=[];
    for(var i=0;i<items.length;i++){
      var item=items[i];
      var borderRightColor= i==(items.length-1)?'white':'#dddddd';
      Items.push(
          this.renderItem(item,i,borderRightColor)
      )
    }
    return Items;
  }
  renderItem(item,i,borderRightColor){
    return(
        <TouchableOpacity
          key={i}
          style={[styles.outViewStyle,{borderRightWidth:1,borderRightColor:borderRightColor}]}
          activeOpacity={0.7}
          onPress={ () =>this.clickItem(item)}
        >
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={[styles.descriptionStyle,{color:item.deccrptionColor} ]}>{item.descrption}</Text>
          <Image style={styles.imageStyle} source={{uri:item.imageUrl}}></Image>
        </TouchableOpacity>
    )
  }

  clickItem(item){
    alert(item.title);
  }
}

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#dddddd'
  },
  outViewStyle:{
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  },
  imageStyle:{
    width:50,
    height:50,
    borderRadius:25,
    marginBottom:10,
    marginTop:6
  },
  titleStyle:{
    marginTop:6,
    fontSize:15
  },
  descriptionStyle:{
    fontSize:12
  }

});