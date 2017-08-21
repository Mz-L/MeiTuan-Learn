/**
 * Created by Mz on 2017/8/19.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';


export default class HomeBottom extends Component {

  static  defaultProps={
    goods:[]
  };

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} );
    this.state={
      dataSource:ds
    }
  }

  render() {
    if(this.props.goods.length<=0) return <View/>;
    this.state={
      dataSource:this.state.dataSource.cloneWithRows(this.props.goods)
    };

    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={ (rowDate)=> this.renderItem(rowDate) }
        scrollEnabled={true}
      >
      </ListView>
    )
  }

  renderItem(itemData){
    return(
        <TouchableOpacity
          style={styles.viewStyle}
          activeOpacity={0.7}
          onPress={ ()=>this.clickItem(itemData) }
        >
          {/*左边*/}
          <View style={styles.viewLeftStyle}>
            <Image source={{uri:itemData.icon}} style={styles.imageStyle}/>
          </View >

          {/*右边*/}
          <View style={styles.viewRightStyle}>
            {/*上*/}
            <View style={styles.viewTopStyle}>
              <Text style={styles.titleStyle}>{itemData.storeName}</Text>
              <Text style={styles.descriptionStyle}>{itemData.distance}</Text>
            </View>
            {/*中*/}
            <View style={styles.viewCenterStyle}>
              <Text style={styles.descriptionStyle}>{itemData.descrption}</Text>
            </View>
            {/*下*/}
            <View style={styles.viewBottomStyle}>
              <Text style={styles.priceStyle}>¥{itemData.price}</Text>
              <Text style={styles.descriptionStyle}>门市价:{itemData.marketPrice}</Text>
              <Text style={styles.descriptionStyle}>销量:{itemData.sales}</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
  }

  clickItem(itemDate){
    alert(itemDate.storeName)
  }

}

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection:'row',
    height:100,
    borderTopWidth:1,
    borderTopColor:'#dddddd',
    paddingRight:5
  },
  viewLeftStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  viewRightStyle:{
    flex:2
  },
  imageStyle:{
    width:86,
    height:86,
    borderRadius:6
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
    alignItems:'center',
    justifyContent:'space-between'
  },
  titleStyle:{
    fontSize:14
  },
  descriptionStyle:{
    fontSize:11,
    color:'#9F9F9F'
  },
  priceStyle:{
    color:'#06C1AE',
    fontSize:15
  }

});