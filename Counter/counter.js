import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import counterStyles from "./styles";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
        count: '0'
    }

    this.onPress = this.onPress.bind(this);
    this.reset = this.reset.bind(this);
}

onPress () {
  const newCount = (Number(this.state.count) + 1).toString();
  this.setState({count: newCount});
}
reset () {
  const newCount = (0).toString();
  this.setState({count: newCount});
}
  render () {
  return (
    <View style={counterStyles.displayBox}>
      <Text style={counterStyles.title}>Counter</Text>
      <Text style={counterStyles.display}>Count: {this.state.count} </Text>
      <View style={{flexDirection:"row", paddingTop: 10}}>
      <View style={{paddingRight: 5}}>
      <TouchableOpacity
        style={counterStyles.inputBox}
        onPress= {this.onPress}
      >
        <Text style={{textAlign:'center', color:'white'}}>+</Text>
      </TouchableOpacity>
    </View>
    <View style={{paddingLeft: 5}}>
      <TouchableOpacity
        style={counterStyles.inputBox}
        onPress={this.reset}
      >
        <Text style={{textAlign:'center', color: 'white'}}>Reset</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
    
  );
  }
}
