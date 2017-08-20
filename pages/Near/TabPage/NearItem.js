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

export  default class NearItem extends Component{

  render(){
    return(
        <View style={styles.viewStyle}>
          {/*左边*/}
          <View style={styles.viewLeftStyle}>
            <Image style={styles.imageStyle} source={{uri:this.props.rowDate.icon}}></Image>
          </View>

          {/*右边*/}
          <View style={styles.viewRightStyle}>
            {/*上*/}
            <View style={styles.viewTopStyle}>
              <View style={styles.titleStyle}>
                <Text numberOfLines={1}>{this.props.rowDate.storeName}</Text>
                {this.renderTags(this.props.rowDate.tagIcons)}
              </View>
              <View>
                <Text>{this.props.rowDate.distance}</Text>
              </View>
            </View>
            {/*中*/}
            <View style={styles.viewCenterStyle}>
              <Image style={{width:60,height:12,marginRight:5,resizeMode:'contain'}} source={{uri:this.props.rowDate.starIcon}}></Image>
              <Text style={styles.descriptionStyle}>人均价:¥{this.props.rowDate.price}</Text>
            </View>
            {/*下*/}
            <View style={styles.viewBottomStyle}>
              <Text style={styles.descriptionStyle}>{this.props.rowDate.descrption}</Text>
            </View>
          </View>
        </View>
    )
  }

  renderTags(tagIcons){
    if(tagIcons.length<=0) return;
    var Tags=[];
    for(var i=0;i<tagIcons.length;i++){
      var imgUrl=tagIcons[i];
      Tags.push(
          <Image key={i} style={{width:13,height:13,marginRight:3,resizeMode:'contain'}} source={{uri:imgUrl}}></Image>
      )
    }
    return Tags;
  }

}

const  styles=StyleSheet.create({
  viewStyle:{
    height:100,
    backgroundColor:'#F5FCFF',
    borderBottomWidth:1,
    borderBottomColor:'#dddddd',
    flexDirection:'row',
    paddingRight:5
  },
  viewLeftStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imageStyle:{
    width:90,
    height:90,
    borderRadius:6
  },

  viewRightStyle:{
    flex:2
  },
  viewTopStyle:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  viewCenterStyle:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  viewBottomStyle:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },

  titleStyle:{
    maxWidth:110,
    flexDirection:'row',
    alignItems:'center'
  },
  descriptionStyle:{
    fontSize:12,
    color:'#9F9F9F'
  }

});